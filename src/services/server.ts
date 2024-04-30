import jsonServer from 'json-server';
import { Request, Response } from 'express';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    const users: any[] = router.db.get('User'); 

    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
        res.json({ success: true, message: 'Đăng nhập thành công', user });
    } else {
        res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng' });
    }
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
