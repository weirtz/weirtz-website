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

  private styleTag: HTMLStyleElement;
  private formOpacity: HTMLElement;
  private successImage: HTMLElement;
  private submitText: HTMLElement;
  private submitLoadingIcon: HTMLElement;
  private submitButton: HTMLElement;

  firstName: string;
  lastName: string;
  email: string;
  message: string;
  selectedNotice;
  contactForm;

  selectedNoticeList = ['Friend', 'Social Media', 'Web search', 'Other'];

  constructor(private title: Title, public http: HttpService,formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      firstNameInput: new FormControl('', Validators.compose([Validators.required])),
      lastNameInput: new FormControl('', Validators.compose([Validators.required])),
      emailInput: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      messageInput: new FormControl('', Validators.compose([Validators.required])),
      selectedNoticeInput: new FormControl('')
    });
  }

  private buildStyleElement() : HTMLStyleElement {
		var style = document.createElement( "style" );

		style.type = "text/css";
		style.setAttribute( "data-debug", "Injected by scrollingService." );
		style.textContent = `
			footer{
        display:none!important;
      }
		`;
		return( style );
	}

  //AWS - SMTP Server.
  //Nodemailer - email
  //Send user form to Nodemailer, who passes to AWS Secure Email Service.
  submit(){

    //Show loading icon
    this.submitText.style.display = "none";
    this.submitLoadingIcon.style.display = "block";
    this.submitButton.style.pointerEvents = "none";

    let emailContent = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      selectedNotice: this.selectedNotice,
      message: this.message
    }

    this.http.sendEmail("https://weirtz-website.uc.r.appspot.com/sendmail", emailContent).subscribe(
      data => {
        let res:any = data; 
        console.log(`Message id is ${res.messageId}`);
      },
      err => {
        //Fail
        console.log(err);
      },() => {
        //Success
        console.log("Success");
        //Show success message
        this.formOpacity.style.opacity = "0";
        this.formOpacity.style.pointerEvents = "none";
        this.successImage.style.display = "block";
      }
    );
  }  //end submit

  ngOnInit() {
    window.scroll(0,0);
    //Set title
    this.title.setTitle("Contact");
    //Get form selector for success message
    this.formOpacity = document.getElementById("form-opacity");
    this.successImage = document.getElementById("success-image");
    this.submitText = document.getElementById("submit-text");
    this.submitLoadingIcon = document.getElementById("spinner-icon");
    this.submitButton = document.getElementById("submit-button");
    // Remove footer
    this.styleTag = this.buildStyleElement();
    document.body.appendChild( this.styleTag );
  }

  ngOnDestroy() {
    document.body.removeChild( this.styleTag );
  }
}
