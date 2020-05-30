import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpService } from './http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  message: string;
  contactForm;

  constructor(private title: Title, public http: HttpService,formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      firstNameInput: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      lastNameInput: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      emailInput: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      messageInput: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  //AWS - SMTP Server.
  //Nodemailer - email
  //Send user form to Nodemailer, who passes to AWS Secure Email Service.
  submit(){

    let emailContent = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message
    }

    this.http.sendEmail("http://localhost:3000/sendmail", emailContent).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `Message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      },() => {
        console.log("Success")
      }
    );
  //end submit
  }

  ngOnInit() {
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Contact");
  }



}
