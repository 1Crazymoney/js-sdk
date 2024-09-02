import BaseWebIrys from "@irys-network/web-bundler-client/base";
import BaseEthereumToken from "./ethereum";
import type {  WebIrysConfig } from "@irys-network/web-bundler-client/types";

export class EthereumIrys extends BaseWebIrys {
  constructor({ url,  provider, config }: WebIrysConfig<string>) {
    super({
      url,
      config,
      getTokenConfig: (irys) =>
        new BaseEthereumToken({
          irys,
          name: "ethereum",
          ticker: "ETH",
          providerUrl: config?.providerUrl ?? "https://cloudflare-eth.com/",
          wallet: provider,
          opts: config?.tokenOpts,
        }),
    });
  }
}
