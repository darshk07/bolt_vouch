import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificateModule } from './certificate/certificate.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CertificateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
