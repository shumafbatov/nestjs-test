import { Injectable } from '@nestjs/common';
import { SearchFormDto } from './dto/search-form.dto';
import { ERROR_EMAIL, FAKE_DATA } from './constants';
import { sleep } from '../utils';

@Injectable()
export class FormService {
  async search({ email, number }: SearchFormDto) {
    await sleep(5000);

    if (!email) return ERROR_EMAIL;

    const emailData = FAKE_DATA.filter((data) => data.email === email);

    if (number) {
      return emailData.filter((data) => data.number === number + '');
    }

    return emailData;
  }
}
