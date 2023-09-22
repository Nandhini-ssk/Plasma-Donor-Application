import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {
  donationCentres = [
    { name: 'Sri Ramachandra Hospital Blood Bank', city: 'Porur' },
    { name: 'The Llmrf Blood Bank', city: 'Porur' },
    {
      name: 'St Thomas Blood Bank & Components Research Centre',
      city: 'Porur',
    },
    { name: 'Rotary Central Ttk Vhs Blood Bank', city: 'Adyar' },
    { name: 'The Llmrf Blood Bank', city: 'Adyar' },
    { name: 'Tamilnadu DR MGR Medical University Blood Bank', city: 'Adyar' },
    { name: 'Dhanvantri Blood Bank', city: 'Adyar' },
    { name: 'Government Peripheral Hospital', city: 'Kolathur' },
    {
      name: 'Chennai Voluntary Blood Bank & Research Centre',
      city: 'Kolathur',
    },
  ];
  filteredCentres: any[] = [];
  city: string = '';

  messages: { [key: string]: string } = {
    'Sorry you are Not eligible to donate!': 'message-danger',
    'You are Eligible to donate!': 'message-success',
  };
  randomMessage: string = '';

  ngOnInit(): void {
    this.randomMessage = Object.keys(this.messages)[
      Math.floor(Math.random() * Object.keys(this.messages).length)
    ];
  }

  getClassForMessage(message: string): string {
    return this.messages[message];
  }
  // messages: string[] = [
  //   'Sorry you are Not eligible to donate!',
  //   'You are Eligible to donate!',
  // ];

  // randomMessage: string = '';

  // ngOnInit(): void {
  //   this.randomMessage =
  //     this.messages[Math.floor(Math.random() * this.messages.length)];
  // }

  filterCentres() {
    this.filteredCentres = this.donationCentres.filter(
      (centre) => centre.city.toLowerCase() === this.city.toLowerCase()
    );
  }
}
