import { Component } from '@angular/core';



@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss']
})
export class CodeHighlightComponent {

  constructor() { }

  html_code: string = `
    <h2>THis is simple html code</h2>
    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry</p>
    <h3>This is simple heading text</h3>
    <p>Dummy text ever since the <strong>1500s</strong>, when an unknown printer took a galley of type and scrambled</p>
  `
  scss_code: string = `
  .field {
    &__input,
    &__textarea {
      padding: 7px 10px;
      font-size: 13px;
      border-radius: 3px;
      &:focus {
        border: 1px solid var(--primary);
      }
      &::placeholder {
        @apply text-gray-400;
        @apply font-light;
      }
    }
  }
  `
  js_code: string = `
  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use \`Prism.plugins.fileHighlight.highlight\` instead.');
      logged = true;
    }
    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
  `
  yaml_code = `---
  - required_engine_version: 8
  
  - list: "allowed_dev_files"
    items:
    - "/dev/null"
    - "/dev/urandom"
    append: true
  
  - list: "allowed_image"
    items:
    - "techincent-ci"
    append: true
  
  - rule: "Accept VPC Peering Connection"
    desc: "Detect accepting an VPC peering connection."
    condition: "jevt.value[/eventName]="AcceptVpcPeeringConnection" and not jevt.value[/errorCode]"
    exceptions: []
    output: "A VPC peering connection has been accepted (requesting user=%jevt.value[/userIdentity/arn])"
    priority: "INFO"
    tags:
    - "cloud"
    - "mitre_TA0005-defense-evasion"
    - "mitre_T1089-disabling-security-tools"
    - "aws_vpc"
    - "aws"
    - "mitre_T1108-redundant-access"
    - "mitre_TA0003-persistence"
    source: "aws_cloudtrail"`;

    json_code = `{
    "name": "github",
    "page": 999,
    "list": [{
      "key": 99,
      "value": "yu"
    }]
  }
    `;

}
