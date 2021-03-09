import { Router } from 'express';
import TaskController from './functions/task.function';

const router = Router();

function AppRouter(): Router {
    router.get('/tasks', async (_req, res) => {
        try {
            const tasks = await new TaskController().get();
            res.json(tasks);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    });

    router.post('/tasks', async (req, res) => {
        try {
            await new TaskController().create({
                title: req.body.title,
                description: req.body.description,
            });

            res.json(true);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    });

    router.delete('/tasks/:id', async (req, res) => {
        try {
            const tasks = await new TaskController().remove(req.params.id);
            res.json(tasks);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    });

    router.put('/tasks/:id', async (req, res) => {
        try {
            const tasks = await new TaskController().edit(req.params.id, {
                title: req.body.title,
                description: req.body.description,
            });
            res.json(tasks);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    });

    return router;
}

export default AppRouter;
