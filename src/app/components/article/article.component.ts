import { Component, OnInit, HostListener, Pipe, PipeTransform } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
// import PDFJSWorker from 'pdfjs-dist/legacy/build/pdf.worker';
import { UserService } from '../../user/user.service'



const pdfPath = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [
    UserService
  ]
})
export class ArticleComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  users = [{ id: 1, name: 'wang' }, { id: 2, name: 'li' }];
  cats = [{ name: 'Tom', userId: 1 }, { name: 'Jerry', userId: 2 }];

  @HostListener('click')
  clicked() { }

  getCat = (userId: number) => {
    console.log('🤪User', userId);
    console.log('this: ', this);
    return this.cats.find(c => c.userId === userId)?.name;
  }

  src = pdfPath;

  async ngOnInit(): Promise<void> {

    // Setting worker path to worker bundle.
    // pdfjsLib.GlobalWorkerOptions.workerSrc = "../../../../../node_modules/pdfjs-dist/legacy/build/pdf.worker.entry.js";
    // const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
    // pdfjsLib.GlobalWorkerOptions.workerPort = new pdfjsLib.PDFWorker()

    // Loading a document.
    // const loadingTask = pdfjsLib.getDocument(pdfPath);
    // loadingTask.promise
    //   .then(function (pdfDocument: any) {
    //     // Request a first page
    //     return pdfDocument.getPage(1).then(function (pdfPage: any) {
    //       // Display page on the existing canvas with 100% scale.
    //       const viewport = pdfPage.getViewport({ scale: 1.0 });
    //       const canvas: any = document.getElementById("theCanvas");
    //       canvas.width = viewport.width;
    //       canvas.height = viewport.height;
    //       const ctx = canvas.getContext("2d");
    //       const renderTask = pdfPage.render({
    //         canvasContext: ctx,
    //         viewport,
    //       });
    //       return renderTask.promise;
    //     });
    //   })
    //   .catch(function (reason: any) {
    //     console.error("Error: " + reason);
    //   });
  }
  say(str: string) {
    console.log(str || 'one')
  }

  changeTitle() {
    this.userService.changeTitle()
  }

}

@Pipe({
  name: 'cat',
  pure: true
})
export class CatPipe implements PipeTransform {
  constructor(private appComponent: ArticleComponent) {}

  transform(id: number, property: 'name' | 'userId'): any {
    console.log('🤪User', id);
    const cat = this.appComponent.cats.find(c => c.userId === id);
    if (cat) {
      return cat[property];
    }
  }
}
