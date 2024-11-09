import {ChangeDetectionStrategy,computed,Component, signal} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
export interface Task{
  name:string;
  completed:boolean;
  subtasks?:Task[];
}
@Component({
  selector: 'app-procedure-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    NgForOf,
    MatRadioButton,
    MatRadioGroup,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './procedure-forms.component.html',
  styleUrl: './procedure-forms.component.css'
})

export class ProcedureFormsComponent {
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  currentStep: number = 0;
  equipamiento=[
    {value:'Equi-opcion1',viewValue:'a) Equipo de cómputo'},
    {value:'Equi-opcion2',viewValue: 'b) Conexión a Internet y\n' +
        'correo electrónico'},
    {value:'Equi-opcion3',viewValue:'c) Teléfono'},
    {value:'Equi-opcion4',viewValue: 'd) Equipo de impresora y\n' +
        'escáner'}
  ]
  readonly task=signal<Task>({
    name:'Oficina administrativa con las\n' +
      'características siguientes:',
    completed:false,
    subtasks:[
      {name:'a) Local de libre acceso al\n' +
          'público para atender al turista y\n' +
          'dedicado a prestar de manera\n' +
          'exclusiva el servicio de agencia\n' +
          'de viajes y turismo',completed:false},
      {name:'b) Independizada de los locales\n' +
          'de negocio colindantes.\n',completed:false},
    ],
  });
  readonly partiallyComplete = computed(()=>{
    const task = this.task();
    if(!task.subtasks){
      return false;
    }
    return task.subtasks.some(t=>t.completed)&& !task.subtasks.every(t=>t.completed);
  });
  update(completed:boolean, index?:number){
    this.task.update(task => {
      if(index===undefined){
        task.completed=completed;
        task.subtasks?.forEach(t =>(t.completed=completed));
      }else{
        task.subtasks![index].completed=completed;
        task.completed=task.subtasks?.every(t=>completed)??true;
      }
      return {...task};
    })
  }

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      razonSocial: ['', Validators.required],
      nRuc: ['', Validators.required],
      domicilioLegal: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      representanteLegal: ['', Validators.required],
      nDniRepresentanteLegal: ['', Validators.required],

    });

    this.step2Form = this.fb.group({
      nombreComercial: ['', Validators.required],
      direccionComercial: ['', Validators.required],
      departamentoComercial: ['', Validators.required],
      provinciaComercial: ['', Validators.required],
      distritoComercial: ['', Validators.required],
      telefonoComercial: ['', Validators.required],
      paginawebComercial: ['', Validators.required],
      correoComercial: ['', Validators.required],
      cuentasRedesSocialesComercial: ['', Validators.required],
      fechaInicioOperacionesComercial: ['', Validators.required],
      nlicenciaFuncionalComercial: ['', Validators.required],
      fechaExpedicionComercial: ['', Validators.required],
    });

    this.step3Form = this.fb.group({
      multiboxSeleccion: this.fb.array([], Validators.required), // Inicialmente vacío
      multiboxSeleccionTurismo:this.fb.array([],Validators.required)
    });
  }
  get multiboxSeleccionTurismo(): FormArray {
    return this.step3Form.get('multiboxSeleccionTurismo') as FormArray;
  }
  get multiboxSeleccion(): FormArray {
    return this.step3Form.get('multiboxSeleccion') as FormArray;
  }
  onCheckBoxChangeTurismo(event:any){
    const formArray: FormArray = this.multiboxSeleccionTurismo;
    if(event.cheked){
      formArray.push(new FormControl(event.source.value));
    }else{
      const index=formArray.controls.findIndex(x=>x.value===event.source.value)
      formArray.removeAt(index);
    }
  }
  onCheckBoxChange(event:any){
    const formArray: FormArray = this.multiboxSeleccion;
    if(event.cheked){
      formArray.push(new FormControl(event.source.value));
    }else{
      const index=formArray.controls.findIndex(x=>x.value===event.source.value)
      formArray.removeAt(index);
    }
  }


  nextStep() {
    if (this.currentStep === 0 && this.step1Form.valid) {
      this.currentStep++;
    } else if (this.currentStep === 1 && this.step2Form.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.step3Form.valid) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
