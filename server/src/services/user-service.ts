import { UserModel, userModel} from "../db/data-source"
import { updateUserInfo, userInfo } from "src/routers";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  userModel: UserModel
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(userModel:UserModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo:userInfo) {
    const { email, name, password, nickName, phoneNumber } = userInfo;
    // 이메일 중복 확인
    if(email==undefined) throw new Error("Email was not given");
    const user = await this.userModel.findUserbyEmail(email);
    if (user) {
      throw new Error(
        '이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.'
      );
    }
    // 이메일 중복은 이제 아니므로, 회원가입을 진행함
    // 우선 비밀번호 해쉬화(암호화)
    if(!email || !name || !password || !nickName || !phoneNumber) throw new Error("data is not given");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo:userInfo = userInfo;
    newUserInfo.password = hashedPassword;

    // db에 저장
    const createdNewUser = await this.userModel.create(newUserInfo);
    return createdNewUser;
  }


  // 로그인
  async getUserToken(loginInfo:userInfo) {
    // 객체 destructuring
    const { email, password } = loginInfo;
    // 우선 해당 이메일의 사용자 정보가  db에 존재하는지 확인
    if(email==undefined) throw new Error("Email was not given");

    const user = await this.userModel.findUserbyEmail(email);
    if (!user) {
      throw new Error(
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    if(password==undefined) throw new Error("password was not given");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담음
    const token = jwt.sign({ userEmail: user.email, role: user.role }, secretKey);

    return { token };
  }

  async findUser(email:string){
    const user=await this.userModel.findUserbyEmail(email);
    return user;
  }
  // // 사용자 목록을 받음.
  // async getUsers() {
  //   const users = await this.userModel.findAll();
  //   return users;
  // }
  
  async getUserByEmail(email:string){
    const user= await this.userModel.findUserbyEmail(email);
    return user
  }
  
  // // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
  async setUser(updateUserInfo: updateUserInfo, email: string) {
    const { currentPassword } = updateUserInfo;
    if(!email) throw new Error("email not provided");
    const user = await this.userModel.findUserbyEmail(email);
    if (!user) {
      throw new Error(
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.'
      );
    }
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 이제 드디어 업데이트 시작

    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    const { password } = updateUserInfo;
    
    console.log('password : ', password, '<<');
    if (password !== undefined) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      updateUserInfo.password = newPasswordHash;
    }
    console.log('after password : ', updateUserInfo.password, '<<');

    // 업데이트 진행
    delete updateUserInfo.email;
    const updateduser = await this.userModel.updateUser(email, updateUserInfo);
    return updateduser;
  }
    // 3. 전체 제품 품목 수(SKU) 조회

  async countUsers() {
    const userCount = await this.userModel.countAll();
    return userCount;
  }

  // 4. 특정 범위(페이지) 위치한 제품 정보 조회
  async getRangedUsers(page:number,perPage:number) {
    const rangedProductsInfo = await this.userModel.getInRange(page, perPage);
    return rangedProductsInfo;
  }

  // //유저 정보 삭제, 현재 비밀번호가 있어야 수정 가능함.
  //박세웅
  async removeUser(userInfo:userInfo){
    const {email, password}= userInfo;
    if(!email) throw new Error("Email was not given");
    let user = await this.userModel.findUserbyEmail(email);
    if(user==null){throw new Error('존재하지 않는 아이디입니다.')}
    const correctPasswordHash = user.password;

    if(!password) throw new Error("Password was not given");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );
    

    if (!isPasswordCorrect) {
      throw new Error(
        '현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }
    //유저 이메일 불러와서 삭제하기
    try{
    await this.userModel.deleteUser(
      email
    );
    }
    catch(error) {
      throw new Error(
        '삭제에 실패했습니다. 다시 한 번 확인해 주세요.' // 확인 필요
      );
    }
    return user;

  }
}

const userService = new UserService(userModel);

export { userService };
