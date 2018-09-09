import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() StartNewTraining = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  
  StartNew(){
this.StartNewTraining.emit();
  }

}
