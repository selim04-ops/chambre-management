import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent {
  chambreForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService) {
    this.chambreForm = this.formBuilder.group({
      numeroChambre: ['', Validators.required],
      typeC: ['', Validators.required]
    });
  }

  addChambre(): void {
    if (this.chambreForm.valid) {
      const newChambre: Chambre = this.chambreForm.value;
      this.chambreService.addChambre(newChambre).subscribe(() => {
        alert('Chambre added successfully!');
        this.chambreForm.reset(); // Reset the form after submission
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
