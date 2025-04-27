import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-skills',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  interests = [
    { title: 'SKILLS-INTERESTS-1', fontSet: 'material-icons', icon: 'integration_instructions' },
    { title: 'SKILLS-INTERESTS-2', fontSet: 'fa', icon: 'fa-puzzle-piece' },
    { title: 'SKILLS-INTERESTS-3', fontSet: 'material-icons', icon: 'group' },
    { title: 'SKILLS-INTERESTS-4', fontSet: 'material-icons', icon: 'smart_toy' },
    { title: 'SKILLS-INTERESTS-5', fontSet: 'material-icons', icon: 'playlist_add_check_circle' },
    { title: 'SKILLS-INTERESTS-6', fontSet: 'material-icons', icon: 'cloud' },
    { title: 'SKILLS-INTERESTS-7', fontSet: 'fab', icon: 'fa-osi' },
    { title: 'SKILLS-INTERESTS-8', fontSet: 'material-icons', icon: 'view_kanban' }
  ];

  skills = {
    softSkills: [
      {
        icon: 'psychology_alt',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-1',
        description: 'SOFT-SKILLS-DESCRIPTION-1'
      },
      {
        icon: 'chat',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-2',
        description: 'SOFT-SKILLS-DESCRIPTION-2'
      },
      {
        icon: 'leaderboard',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-3',
        description: 'SOFT-SKILLS-DESCRIPTION-3'
      },
      {
        icon: 'group',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-4',
        description: 'SOFT-SKILLS-DESCRIPTION-4'
      },
      {
        icon: 'bolt',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-5',
        description: 'SOFT-SKILLS-DESCRIPTION-5'
      },
      {
        icon: 'school',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-6',
        description: 'SOFT-SKILLS-DESCRIPTION-6'
      },
      {
        icon: 'insights',
        fontSet: 'material-icons',
        title: 'SOFT-SKILLS-TITLE-7',
        description: 'SOFT-SKILLS-DESCRIPTION-7'
      },
    ],
    hardSkills: {
      "HARD-SKILLS-TITLE-1": [
        { title: 'JAVA', link: 'https://www.vectorlogo.zone/logos/java/java-ar21~bgwhite.svg' },
        { title: 'KOTLIN', link: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-ar21~bgwhite.svg' },
        { title: 'PYTHON', link: 'https://www.vectorlogo.zone/logos/python/python-ar21~bgwhite.svg' },
        { title: 'Ruby', link: 'https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-ar21~bgwhite.svg' },
        { title: 'C++', link: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
        { title: 'JAVASCRIPT', link: 'https://www.vectorlogo.zone/logos/javascript/javascript-ar21~bgwhite.svg' },
        { title: 'HTML5', link: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21~bgwhite.svg' },
        { title: 'CSS3', link: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~bgwhite.svg' },
        { title: 'GraphQL', link: 'https://www.vectorlogo.zone/logos/graphql/graphql-ar21~bgwhite.svg' },
        { title: 'PHP', link: 'https://www.vectorlogo.zone/logos/php/php-ar21~bgwhite.svg' },
        { title: 'TYPESCRIPT', link: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21~bgwhite.svg' },
      ],
      "HARD-SKILLS-TITLE-2": [
        { title: 'Spring Boot / Spring Framework', link: 'https://www.vectorlogo.zone/logos/springio/springio-ar21~bgwhite.svg' },
        { title: 'Hibernate', link: 'https://www.vectorlogo.zone/logos/hibernate/hibernate-ar21~bgwhite.svg' },
        { title: 'Cucumber', link: 'https://www.vectorlogo.zone/logos/cucumberio/cucumberio-ar21~bgwhite.svg' },
        { title: 'Django', link: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21~bgwhite.svg' },
        { title: 'Flask', link: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-ar21~bgwhite.svg' },
        { title: 'Junit5', link: '/icons/junit.svg' },
        { title: 'Express', link: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21~bgwhite.svg' },
        { title: 'Laravel', link: 'https://www.vectorlogo.zone/logos/laravel/laravel-ar21~bgwhite.svg' },
        { title: 'CodeIgniter', link: '/icons/codeigniter.svg' },
        { title: 'Ruby on Rails', link: '/icons/rails.svg' },
        { title: 'Serverless Framework', link: 'https://www.vectorlogo.zone/logos/serverless/serverless-ar21~bgwhite.svg' },
      ],
      "HARD-SKILLS-TITLE-3": [
        { title: 'Angular', link: 'https://www.vectorlogo.zone/logos/angular/angular-ar21~bgwhite.svg' },
        { title: 'Vue.js', link: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21~bgwhite.svg' },
        { title: 'Vuetify', link: '/icons/vuetify.png' },
        { title: 'Material Design', link: '/icons/material-designer.svg' },
      ],
      "HARD-SKILLS-TITLE-4": [
        { title: 'Pandas', link: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
        { title: 'NumPy', link: 'https://www.vectorlogo.zone/logos/numpy/numpy-ar21~bgwhite.svg' },
        { title: 'Matplotlib', link: 'https://upload.wikimedia.org/wikipedia/en/5/56/Matplotlib_logo.svg' },
        { title: 'TensorFlow', link: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21~bgwhite.svg' },
        { title: 'Scikit-learn', link: '/icons/scikit-learn.svg' },
        { title: 'QuickSight', link: '/icons/quicksight.png' },
      ],
      "HARD-SKILLS-TITLE-5": [
        { title: 'MySQL', link: 'https://www.vectorlogo.zone/logos/mysql/mysql-ar21~bgwhite.svg' },
        { title: 'PostgreSQL', link: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21~bgwhite.svg' },
        { title: 'MongoDB', link: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg' },
        { title: 'Redis', link: 'https://www.vectorlogo.zone/logos/redis/redis-ar21~bgwhite.svg' },
        { title: 'DynamoDB', link: '/icons/dynamo.png' },
        { title: 'Elasticsearch', link: '/icons/elasticsearch.svg' },
        { title: 'Neo4j', link: 'https://www.vectorlogo.zone/logos/neo4j/neo4j-ar21~bgwhite.svg' },
      ],
      "HARD-SKILLS-TITLE-6": [
        { title: 'AWS', link: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21~bgwhite.svg' },
        { title: "DataDog", link: 'https://www.vectorlogo.zone/logos/datadoghq/datadoghq-ar21~bgwhite.svg' },
        { title: 'Docker', link: 'https://www.vectorlogo.zone/logos/docker/docker-ar21~bgwhite.svg' },
        { title: 'Kubernetes', link: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21~bgwhite.svg' },
        { title: 'Terraform', link: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-ar21~bgwhite.svg' },
        { title: 'Git', link: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21~bgwhite.svg' },
        { title: 'Maven', link: 'https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21~bgwhite.svg' },
        { title: 'Gradle', link: 'https://www.vectorlogo.zone/logos/gradle/gradle-ar21~bgwhite.svg' },
        { title: 'pip', link: 'https://www.vectorlogo.zone/logos/pypi/pypi-ar21~bgwhite.svg' },
        { title: 'npm', link: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21~bgwhite.svg' },        
      ],
    }
  };

}