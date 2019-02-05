import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.render('index', { title: 'Welcome a my site'});
    }
}

export const indexController = new IndexController();