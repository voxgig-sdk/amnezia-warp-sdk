import { AmneziaWarpEntityBase } from '../AmneziaWarpEntityBase';
import type { AmneziaWarpSDK } from '../AmneziaWarpSDK';
import type { Control } from '../types';
import type { Configuration, ConfigurationLoadMatch } from '../AmneziaWarpTypes';
declare class ConfigurationEntity extends AmneziaWarpEntityBase<Configuration> {
    constructor(client: AmneziaWarpSDK, entopts: any);
    make(this: ConfigurationEntity): ConfigurationEntity;
    load(this: any, reqmatch?: ConfigurationLoadMatch, ctrl?: Control): Promise<ConfigurationEntity>;
}
export { ConfigurationEntity };
