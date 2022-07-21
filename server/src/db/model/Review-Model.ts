import { reviewInfo } from 'src/routers';
import { AppDataSource } from '../data-source';
import { Review } from '../entity/Review';
import { Rating } from '../entity/Rating';

/**
 * Loads all posts from the database.
 */
export class ReviewModel {
  // 1-1. 유저 리뷰 생성
  async create(reviewInfo: reviewInfo) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Review)
      .values([reviewInfo])
      .execute();
  }

  // 1-2. 업주 리뷰 생성
  async reply(reserveId: number, ownerComment: string) {
    await AppDataSource.createQueryBuilder()
      .update(Review)
      .set({ ownerComment: ownerComment })
      .where('reserveId = :reserveId', { reserveId: reserveId })
      .execute();
  }

  // 2-1. 특정 범위(페이지) 위치한 리뷰 조회
  async getInRange(page: number, perPage: number) {
    const reviewRepository = AppDataSource.getRepository(Review);

    const reviewsInRange = await reviewRepository.find({
      order: {
        createdAt: 'DESC',
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return reviewsInRange;
  }

  // 2-2. 특정 범위(페이지) 위치한 리뷰 조회 - REGNumber 이용
  async getInRangeByREGNumber(
    REGNumber: string,
    page: number,
    perPage: number,
  ) {
    const reviewRepository = AppDataSource.getRepository(Review);

    const reviewsInRange = await reviewRepository.find({
      where: { REGNumber: REGNumber },
      order: {
        createdAt: 'DESC',
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return reviewsInRange;
  }

  // 2-3. 특정 리뷰 조회
  async findReviewByReserveId(reserveId: number) {
    const reviewRepository = AppDataSource.getRepository(Review);
    // get a post repository to perform operations with post
    const review = await reviewRepository.findOneBy({
      reserveId: reserveId,
    });
    return review;
  }

  // 3-1. 사용자 리뷰 삭제
  async deleteReview(reserveId: number) {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Review)
      .where('reserveId = :reserveId', { reserveId: reserveId })
      .execute();
  }

  // 3-2. 업주 리뷰 삭제
  async replyDelete(reserveId: number) {
    await AppDataSource.query(
      ` UPDATE Review SET ownerComment=NULL WHERE reserveId=${reserveId}`,
    );
    // .update(Review)
    // .set({ ownerComment: a })
    // .where('reserveId = :reserveId', { reserveId: reserveId })
    // .execute();
  }

  // 4-1. 전체 리뷰 숫자 카운트
  async countAll() {
    const reviewRepository = AppDataSource.getRepository(Review);
    const count = await reviewRepository.count({});
    return count;
  }

  // 4-2. 특정 업체 리뷰 숫자 카운트
  async countAllByREGNumber(REGNumber: string) {
    const reviewRepository = AppDataSource.getRepository(Review);
    const reviewsNumber = await reviewRepository.count({
      where: { REGNumber: REGNumber },
    });
    return reviewsNumber;
  }
}

const reviewModel = new ReviewModel();
export { reviewModel };
