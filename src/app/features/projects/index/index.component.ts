import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-index',
  imports: [
    TranslateModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: true
})
export class IndexComponent {
  projects = [
    {
      title: 'PROJECT-TITLE-13',
      description: 'PROJECT-DESCRIPTION-13',
      tags: ['Spring Boot', 'Java', 'Angular', 'Material'],
      type: 'code',
      link: 'https://encurtadorurl.cahenre.com.br/',
      image: '/projects/url-shortener.png',
      alt: 'Url Shortener by Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-0',
      description: 'PROJECT-DESCRIPTION-0',
      tags: ['Angular', 'Material', 'Canvas'],
      type: 'code',
      link: '/projects/draggable-blur-mask',
      image: '/projects/blur.png',
      alt: 'Draggable Blur Mask example'
    },
    {
      title: 'PROJECT-TITLE-1',
      description: 'PROJECT-DESCRIPTION-1',
      tags: ['Python', 'Pip'],
      type: 'library',
      link: 'https://pypi.org/project/the-trivia-api-library/',
      image: '/projects/the-trivia.png',
      alt: 'The Trivia API Library'
    },
    {
      title: 'PROJECT-TITLE-2',
      description: 'PROJECT-DESCRIPTION-2',
      tags: ['Python', 'Gemini', 'OpenCV', 'MoviePy'],
      type: 'code',
      link: 'https://github.com/Carlos-Henreis/maker-video-ai',
      image: '/projects/maker-video-ai.png',
      alt: 'Maker Video AI Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-3',
      description: 'PROJECT-DESCRIPTION-3',
      tags: ['Vue', 'Vuetify', 'whatsapp api'],
      type: 'code',
      link: 'https://codepen.io/carlos-henreis/pen/qvKWVp',
      image: '/projects/floating-whatsapp.png',
      alt: 'Floating WhatsApp VueJS Vuetify example Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-4',
      description: 'PROJECT-DESCRIPTION-4',
      tags: ['Angular', 'Material', 'FontAwesome'],
      type: 'article',
      link: 'https://carloshenriquereis-17318.medium.com/using-font-awesome-with-angular-material-19-and-standalone-components-92a81907e1e3',
      image: '/projects/angular-fontawesome.png',
      alt: 'Using Font Awesome with Angular Material 19 and Standalone Components'
    },
    {
      title: 'PROJECT-TITLE-5',
      description: 'PROJECT-DESCRIPTION-5',
      tags: ['Angular', 'Node.js', 'Neo4j', 'Graph Database', 'Cypher', 'Graphs'],
      type: 'workshop',
      link: 'https://github.com/Carlos-Henreis/PCO001-AVAL02/blob/main/3.%20hands_on/README.md',
      image: '/projects/graph.png',
      alt: 'Graph Database Neo4j Cypher Workshop Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-6',
      description: 'PROJECT-DESCRIPTION-6',
      tags: ['Python', 'Tensorflow', 'Pandas'],
      type: 'article',
      link: '/projects/Monografia_TFG.pdf',
      image: '/projects/optimization.png',
      alt: 'Optimization of the training process of a neural network using TensorFlow and Pandas Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-7',
      description: 'PROJECT-DESCRIPTION-7',
      tags: ['Python', 'Tensorflow', 'Pandas'],
      type: 'workshop',
      link: 'https://github.com/Carlos-Henreis/tensorflow-workshop',
      image: '/projects/workshop-tensorflow.png',
      alt: 'TensorFlow Workshop Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-8',
      description: 'PROJECT-DESCRIPTION-8',
      tags: ['VueJS', 'PHP', 'Laravel', 'Vuetify'],
      type: 'code',
      link: 'https://github.com/Carlos-Henreis/Laravel_VueJS',
      image: '/projects/laravel.jpg',
      alt: 'Laravel VueJS Project Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-9',
      description: 'PROJECT-DESCRIPTION-9',
      tags: ['Python', 'html5lib', 'protobuf', 'scikit-learn', 'tensorflow'],
      type: 'code',
      link: 'https://github.com/Carlos-Henreis/PDI',
      image: '/projects/mnist-input.png',
      alt: 'PDI Project Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-10',
      description: 'PROJECT-DESCRIPTION-10',
      tags: ['Python', 'numpy', 'Matplotlib'],
      type: 'code',
      link: 'https://github.com/Carlos-Henreis/galaxia',
      image: '/projects/galaxy.gif',
      alt: 'Galaxy Project Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-11',
      description: 'PROJECT-DESCRIPTION-11',
      tags: ['Vuetify', 'Vuejs', 'Material Design'],
      type: 'code',
      link: 'https://codepen.io/carlos-henreis/pen/vzXKBJ',
      image: '/projects/vue-gotop.gif',
      alt: 'Vue Go To Top Vuetify example Carlos Henrique Reis'
    },
    {
      title: 'PROJECT-TITLE-12',
      description: 'PROJECT-DESCRIPTION-12',
      tags: ['Vuetify', 'Vuejs', 'Material Design'],
      type: 'code',
      link: 'https://carlos-henreis.github.io/files/minesweeper.html',
      image: '/projects/mine.png',
      alt: 'Game Minesweeper Vuetify by Carlos Henrique Reis'
    }
  ];

  openProject(project: any) {
    window.open(project.link, '_blank');
  }
}
