import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  // styleUrls: ['./form-reactive.component.css'],
  styles: ['label{background-color:lightyellow} '],
})
export class FormReactiveComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formName!: FormGroup;

  ngOnInit() {
    this.formName = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z A-Z]+$/g)]],
      age: [''],
      email: [
        'asdf@caser.com',
        [Validators.email, Validators.pattern(/.+@caser.com/)],
      ],
      dniExpireDate: ['', [Validators.required]],
      dniPermanent: [false],
      birthDate: ['', [Validators.required]],
      formAdress: this.formBuilder.group({
        adress:'',
        city:'',
        CP:''
      })
    });

    this.formName.get('birthDate')?.valueChanges.subscribe((value) => {
      this.age();
    });
  }

  log() {
    console.log(this.name!.valid)
    console.log(this.formName.value);
    console.log(this.formName.get('formAdress.CP')?.valid);    
  }
  clear() {
    this.formName.patchValue({
      name: [],
      age: [],
      email: [],
      dniExpireDate: [],
      birthDate: [],
      dniPermanent: [false],
    });
  }

  validateDNIDate() {
    let now = new Date();
    let DNIdate = new Date(this.formName.value.dniExpireDate);
    return now < DNIdate ? true : false;
  }

  validateAge() {
    // let now = new Date();
    // let eighteenYearsAgo = new Date(now.setFullYear(now.getFullYear() - 18));
    // let birth = new Date(this.formName.value.birthDate);
    // return birth < eighteenYearsAgo ? true : false;
    return this.formName.value.age >= 18 ? true : false;
  }

  age() {
    let now = new Date().getFullYear();
    let birth = new Date(this.formName.value.birthDate).getFullYear();
    let age = now - birth;
    this.formName.patchValue({ age: age });
  }

  onSubmit() {
    if (!this.validateAge()) {
      alert('MENOR DE EDAD');
      return;
    }
    console.log('Mayor de edad');

    if (!this.validateDNIDate()) {
      alert('DNI CADUCADO');
      return;
    }
    console.log('Submitted');
    console.log(this.formName.value);
  }
  get name(){
    return this.formName.get('name')
  }
}
