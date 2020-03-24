import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service'

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {

  constructor( private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientService.fetchListPatients().subscribe (
      data => console.log(data)
    )
  }

}
