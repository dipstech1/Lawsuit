import { Component, Input } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CdkStepperModule,NgTemplateOutlet,NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper {
  @Input()
  activeClass = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
}
