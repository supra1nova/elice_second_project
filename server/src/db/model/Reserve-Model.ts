import { AppDataSource } from '../data-source';
import { Reserve } from '../entity/Reserve';
import { reserveInfo } from 'src/routers/reserve-Router';
/**
 * Loads all posts from the database.
 */
export class ReserveModel {
  // 1. 예약 생성
  async create(reserveInfo: reserveInfo) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Reserve)
      .values([reserveInfo])
      .execute();
  }

  // 2-1. admin 전용 전체 예약 조회
  async getInRange(page: number, perPage: number) {
    const reserveRepository = AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      order: {
        createdAt: 'ASC',
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return reservesInRange;
  }

  // 2-2. 특정 이메일 기준 예약 조회
  async getInRangeByEmail(email: string, page: number, perPage: number) {
    const reserveRepository = AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      where: { email: email },
      order: {
        createdAt: 'ASC',
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return reservesInRange;
  }

  // 2-3. 특정 사업자 기준 예약 조회
  async getInRangeByREGNumber(
    REGNumber: string,
    page: number,
    perPage: number,
  ) {
    const reserveRepository = AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      where: { REGNumber: REGNumber },
      order: {
        createdAt: 'ASC',
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return reservesInRange;
  }

  // 2-4. 예약 상세 정보 조회
  async findReserveByReserveId(reserveId: number) {
    const reserveRepository = AppDataSource.getRepository(Reserve);
    // get a post repository to perform operations with post
    const reserve = await reserveRepository.findOneBy({
      reserveId: reserveId,
    });
    return reserve;
  }

  // 3. 예약 정보 삭제
  async deleteReserve(reserveId: number) {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Reserve)
      .where('reserveId = :reserveId', { reserveId: reserveId })
      .execute();
  }

  // 4. 전체 예약 숫자 카운트
  async countAll() {
    const reserveRepository = AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({});
    return reservesNumber;
  }

  // 5. 특정 이메일 기준 예약 숫자 카운트
  async countAllByEmail(email: string) {
    const reserveRepository = AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({
      where: { email: email },
    });
    return reservesNumber;
  }

  // 6. 특정 사업자 기준 예약 숫자 카운트
  async countAllByREGNumber(REGNumber: string) {
    const reserveRepository = AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({
      where: { REGNumber: REGNumber },
    });
    return reservesNumber;
  }
}

const reserveModel = new ReserveModel();
export { reserveModel };
