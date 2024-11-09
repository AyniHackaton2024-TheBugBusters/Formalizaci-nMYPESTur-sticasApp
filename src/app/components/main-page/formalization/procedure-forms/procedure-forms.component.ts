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
  step4Form: FormGroup;
  step5Form: FormGroup;
  step6Form: FormGroup;
  step7Form: FormGroup;

  currentStep: number = 0;
  personal_calificado=[
    {value:'perso-opcion1',viewValue:'a) Con experiencia mínima de\n' +
        'un (01) año en actividades\n' +
        'turísticas y que haya llevado por\n' +
        'lo menos un curso de técnicas\n' +
        'de atención al cliente'},
    {value:'perso-opcion2',viewValue: 'b) Con formación académica\n' +
        'superior o técnico-productiva en\n' +
        'materia de turismo.'},
  ]
  equipamiento=[
    {value:'equi-opcion1',viewValue:'a) Equipo de cómputo'},
    {value:'equi-opcion2',viewValue: 'b) Conexión a Internet y\n' +
        'correo electrónico'},
    {value:'equi-opcion3',viewValue:'c) Teléfono'},
    {value:'equi-opcion4',viewValue: 'd) Equipo de impresora y\n' +
        'escáner'}
  ]
  readonly gestor=signal<Task>({
    name:'a) Ser propietario, licenciatario o administrador de canales digitales\n' +
      'para la oferta, promoción, comercialización y, en general, la\n' +
      'prestación de sus servicios, los cuales incluyen los contenidos\n' +
      'mínimos siguientes:',
    completed:false,
    subtasks:[
      {name:'1. Número de teléfono, dirección y datos de contacto de la\n' +
          'agencia de viajes y turismo y correo electrónico, las cuales\n' +
          'pueden ser utilizados para asistir y/o atender y/o asesorar al\n' +
          'consumidor.\n',completed:false},
      {name:'2. Número de RUC. \n',completed: false },
      {name:'3. Razón social o nombres y apellidos, según corresponda.\n',completed:false },
      {name:'4. Nombre comercial',completed: false},
      {name: '5. Política de Protección de Datos Personales.',completed:false},
      {name:'6. Términos y Condiciones de Uso del canal digital, lo que\n' +
          'incluye, entre otros aspectos, las políticas de cobro,\n' +
          'cancelación y reembolso.',completed:false},
      {name:'7. Constancia de inscripción en el Directorio Nacional de\n' +
          'Prestadores de Servicios Turísticos Calificados, cuando esta\n' +
          'sea expedida.\n',completed:false},
      {name: '8. Versión digital del afiche u otro documento similar, que\n' +
          'contenga información respecto de las disposiciones legales\n' +
          'que sancionan penalmente las conductas vinculadas a la\n' +
          'ESNNA, de acuerdo a las características y contenido\n' +
          'establecidos por el MINCETUR, así como las que sancionan\n' +
          'el hecho de tener relaciones sexuales con menores de edad,\n' +
          'sin perjuicio de otras medidas que puedan adoptar con el\n' +
          'mismo fin.\n',completed: false}
    ],

  });
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
  readonly personalCalificadoPartiallyComplete=computed(()=>{
    const task = this.gestor();
    if(!task.subtasks){
      return false;
    }
    return task.subtasks.some(t=>t.completed)&& !task.subtasks.every(t=>t.completed);
  });

  readonly partiallyComplete = computed(()=>{
    const task = this.task();
    if(!task.subtasks){
      return false;
    }
    return task.subtasks.some(t=>t.completed)&& !task.subtasks.every(t=>t.completed);
  });
  updateGestor(completed:boolean, index?:number){
    this.gestor.update(task => {
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
      multiboxSeleccionEquipamiento:this.fb.array([],Validators.required),
      multiboxSeleccionPersonal:this.fb.array([],Validators.required),
      personalCalificado: ['', Validators.required],
    });
    this.step4Form = this.fb.group({
      multiboxSeleccionGestor: this.fb.array([], Validators.required),
      multiboxSeleccionContenido: this.fb.array([], Validators.required),
      multiboxSeleccionMedidas: this.fb.array([], Validators.required),
    });
    this.step5Form = this.fb.group({
      multiboxClasificacion: this.fb.array([], Validators.required),
    });
    this.step6Form = this.fb.group({
      modalidadTurismo: ['', Validators.required],
      tipoTurismo: ['', Validators.required],
    });
    this.step7Form = this.fb.group({
      asociacion: ['', Validators.required],
      calificacion: ['', Validators.required],
      servicioTransportePropio: this.fb.array([], Validators.required),
      nUnidadesServicio: ['', Validators.required],
      nPlacas: ['', Validators.required],
    });
  }
  get multiboxSeleccionEquipamiento(): FormArray {
    return this.step3Form.get('multiboxSeleccionEquipamiento') as FormArray;
  }
  get multiboxSeleccion(): FormArray {
    return this.step3Form.get('multiboxSeleccion') as FormArray;
  }
  get multiboxSeleccionPersonal():FormArray {
    return this.step3Form.get('multiboxSeleccionPersonal') as FormArray;
  }

  onCheckBoxChangePersonal(event:any){
    const formArray: FormArray = this.multiboxSeleccionPersonal;
    if(event.cheked){
      formArray.push(new FormControl(event.source.value));
    }else{
      const index=formArray.controls.findIndex(x=>x.value===event.source.value)
      formArray.removeAt(index);
    }
  }
  onCheckBoxChangeEquipamiento(event:any){
    const formArray: FormArray = this.multiboxSeleccionEquipamiento;
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
    }else if(this.currentStep === 3 && this.step4Form.valid) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
