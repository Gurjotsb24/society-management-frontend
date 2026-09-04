export const wait = (ms=550) => new Promise(resolve => setTimeout(resolve, ms));
export async function mockMutation<T>(result:T): Promise<T> { await wait(); return result; }
