import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'isActive' })

export class IsActiveProductPipe implements PipeTransform {

    transform(value: boolean ): string {
        return value ? 'activo' : 'desactivado';
    }

}