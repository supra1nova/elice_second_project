import { Request, Response, NextFunction } from 'express';

function adminRequired(req: Request, res: Response, next: NextFunction) {
  try {
    // role: "admin-user" 확인
    if (req.role === "ADMIN") {
      next();
    } else {
      throw new Error;
    }
  } catch (error) {
    res.status(401).json({
      result: 'forbidden-approach',
      reason: '관리자만 접근 가능한 서비스입니다.',
    });
    return;
  }

};

export { adminRequired };