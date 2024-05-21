import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthShellComponent } from './post-auth-shell.component';

describe('PostAuthShellComponent', () => {
  let component: PostAuthShellComponent;
  let fixture: ComponentFixture<PostAuthShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAuthShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostAuthShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
