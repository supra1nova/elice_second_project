import { Request, Response, NextFunction } from 'express';

function ownerRequired(req: Request, res: Response, next: NextFunction) {
  try {
    // role: "owner-user" 확인
    if (req.role === "OWNER") {
      next();
    } else {
      throw new Error;
    }
  } catch (error) {
    res.status(401).json({
      result: 'forbidden-approach',
      reason: '업주만 접근 가능한 서비스입니다.',
    });
    return;
  }

};

export { ownerRequired };