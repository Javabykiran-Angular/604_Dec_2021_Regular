import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary'
})
export class SummaryPipe implements PipeTransform 
{
    transform(value: string,start:number=0,end:number=25) {

        // return (value.substring(0,25)+'...')

        return (value.substring(start,end)+'...')
    }
}