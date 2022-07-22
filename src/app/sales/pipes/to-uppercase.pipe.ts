import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'mayusculas' })

export class ToUppercasePipe implements PipeTransform {

    transform(value: string, inUpper: boolean = true ): string {
        return inUpper ? value.toUpperCase() : value.toLowerCase();
    }

}