import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { TradingPubModule } from './pub/trading-pub.module';
import { TradingSubModule } from './sub/trading-sub.module';

@Module({
  imports: [TradingPubModule, TradingSubModule],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    Logger.debug('App Init');
  }
}
