import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder,
              private title: Title) { }

  //AWS - SMTP Server.
  //Nodemailer - email
  //Send user form to Nodemailer, who passes to AWS Secure Email Service.
  submitForm(){

  }

  ngOnInit() {
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Contact");
  
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      })
  }

}
