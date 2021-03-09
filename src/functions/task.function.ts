import { task } from '../database/models';
import Task from '../definitions/Task';
import TaskFunction from '../definitions/TaskFunction';

class TaskController implements TaskFunction {
    async remove(id: string): Promise<boolean> {
        await task.findByIdAndRemove(id, {
            useFindAndModify:true
        });

        return true;
    }

    async create(params: Task): Promise<boolean> {
        await task.create<Task>(params);

        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async get(): Promise<any> {
        const tasks = await task.find();

        return tasks;
    }

    async edit(id: string, params: Task): Promise<boolean> {
        await task.findByIdAndUpdate(id, params, {
            useFindAndModify:true
        });

        return true;
    }
}

export default TaskController;