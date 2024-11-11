import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit {
  chambres: Chambre[] = [];

  constructor(private router: Router,private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.loadChambres();
  }
  createNewChambre() {
    this.router.navigate(['/add-chambre']);
  }
  loadChambres(): void {
    this.chambreService.getChambres().subscribe(data => {
      this.chambres = data;
    });
  }

  deleteChambre(id: number): void {
    if (confirm('Are you sure you want to delete this chambre?')) {
      this.chambreService.removeChambre(id).subscribe(() => {
        this.loadChambres(); // Refresh the list after deletion
      });
    }
  }
}
