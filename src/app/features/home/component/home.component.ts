import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Snippet, SnippetComponent} from '@features/snippets';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SnippetComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private fb: FormBuilder) {}

  @Input() snippets: Snippet[];

  @Output() addSnippet = new EventEmitter<Snippet>();

  addSnippetForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  onSubmit() {
    this.addSnippet.emit({
      title: this.addSnippetForm.get('title').value,
      content: this.addSnippetForm.get('content').value,
    });
    this.addSnippetForm.reset();
  }
}
