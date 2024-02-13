import redis from 'redis';

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.client.on('error', (error) => {
            console.error(`Redis connection error: ${error}`);
        });
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (error, reply) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(reply);
            });
        });
    }

    async set(key, value, durationInSeconds) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, 'EX', durationInSeconds, (error, reply) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(reply);
            });
        });
    }

    async del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (error, reply) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(reply);
            });
        });
    }
}

const redisClient = new RedisClient();

export default redisClient;
