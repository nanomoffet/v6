import { Injectable } from '@angular/core';
import { config } from '../../config';

@Injectable()
export class ConfigService {
  
  constructor() { }

  public BaseUrl: string = config.baseUrl + "/" + config.version;
}
