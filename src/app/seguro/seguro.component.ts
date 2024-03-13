import { Component } from '@angular/core';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.css'
})
export class SeguroComponent {
  name?: string;
  gender?: ('Masculino'|'Feminino');
  age: number=0;
  vehicle_value: number = 0;
  final_value?: number;
  
  // Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
  // Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
  // Se sexo for feminino: Valor da apólice = 8% do valor do automóvel

  avaliar() {
    if (this.gender === undefined)
      return;

    if (this.gender === "Masculino" && this.age <= 25)
      this.final_value = 0.15 * this.vehicle_value;
    else if (this.gender === "Masculino") {
      this.final_value = 0.1 * this.vehicle_value;
    }
    else {
      this.final_value = 0.08 * this.vehicle_value;
    }
  }
}
