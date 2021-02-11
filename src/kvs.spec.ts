import { executionAsyncResource } from 'async_hooks';
import KVSClient from './kvs';

jest.mock('cassandra-driver', () => {
  return {
    Client: jest.fn().mockImplementation(() => {
      return {
        execute: jest.fn().mockImplementationOnce(() => {
          return Promise.resolve('Success');
        })
          .mockImplementationOnce(() => {
            return Promise.reject({ name: 'ConnectionError' });
          })
      }
    })
  }
});

describe('kvs', () => {
  it('read', async () => {
    const clinet = new KVSClient();
    const mockDisplay = jest.fn();
    jest.spyOn(clinet, 'display').mockImplementation(mockDisplay);
    await clinet.read();
    expect(mockDisplay.mock.calls[0][0]).toBe('OK')
    await expect(clinet.read()).rejects.toThrow('Failed to read data');
    expect(mockDisplay.mock.calls[1][0]).toBe('ConnectionError')
  });
});
