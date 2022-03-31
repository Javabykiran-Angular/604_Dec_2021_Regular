import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary'
})
export class SummaryPipe implements PipeTransform 
{
    transform(value: string,start:number,end:number) {

        // return (value.substring(0,25)+'...')

        return (value.substring(start,end)+'...')
    }
}