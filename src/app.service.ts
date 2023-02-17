import { Injectable } from '@nestjs/common';
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const secretManager = new SecretsManagerClient({
      region: 'ap-northeast-2',
    });

    const command = new GetSecretValueCommand({
      SecretId: 'abc123',
      VersionStage: 'AWSCURRENT', //
    });

    const secretResult = await secretManager.send(command);

    return secretResult.SecretString;
  }

  async getHello3(): Promise<string> {
    const secretManager = new SecretsManagerClient({
      region: 'ap-northeast-2',
    });

    const command = new GetSecretValueCommand({
      SecretId: 'key123',
      VersionStage: 'AWSCURRENT', //
    });

    const secretResult = await secretManager.send(command);

    return secretResult.SecretString;
  }

  async getHello2(): Promise<string> {
    return process.env.key123;
  }
}
