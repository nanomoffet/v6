import { Pipe, PipeTransform, Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-i-frame',
  templateUrl: './i-frame.component.html',
  styleUrls: ['./i-frame.component.css']
})
export class IFrameComponent implements OnInit {
	@Input() url:any;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
	}

}
