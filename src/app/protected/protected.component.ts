import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `<h2>PROTECTED!</h2>`,
  styleUrls: ['./protected.component.css'],
})
export class ProtectedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
