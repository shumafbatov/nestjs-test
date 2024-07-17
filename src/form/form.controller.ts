import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { SearchFormDto } from './dto/search-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  search(@Body() searchFormDto: SearchFormDto) {
    return this.formService.search(searchFormDto);
  }
}
