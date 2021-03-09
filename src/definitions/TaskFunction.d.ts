import Task from './Task';

declare interface TaskFunction {
    remove(id: string): Promise<boolean>;
    create(params: Task): Promise<boolean>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(): Promise<any>;
    edit(id: string, params: Task): Promise<boolean>;
}

export default TaskFunction;