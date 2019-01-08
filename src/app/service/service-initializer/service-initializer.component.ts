import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-initializer',
  templateUrl: './service-initializer.component.html',
  styleUrls: ['./service-initializer.component.css']
})
export class ServiceInitializerComponent implements OnInit {
  constructor() { }
  block: any;
  blockId: number;
  mainJson = {};
  exampleJsonObject: any;
  jsonFormSchema: string;
  ngOnInit() {

    this.exampleJsonObject = {
      "schema": {
        "title": "Comment",
        "type": "object",
        "required": [ "comments" ],
        "properties": {
          "comments": {
            "type": "array",
            "maxItems": 2,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "title": "Name",
                  "type": "string"
                },
                "email": {
                  "title": "Email",
                  "type": "string",
                  "pattern": "^\\S+@\\S+$",
                  "description": "Email will be used for evil."
                },
                "spam": {
                  "title": "Spam",
                  "type": "boolean",
                  "default": true
                },
                "comment": {
                  "title": "Comment",
                  "type": "string",
                  "maxLength": 20,
                  "validationMessage": "Don't be greedy!"
                }
              },
              "required": [ "name", "comment" ]
            }
          }
        }
      },
      "form": [
        { "type": "help",
          "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
        },
        { "key": "comments",
          "add": "New",
          "style": { "add": "btn-success" },
          "items": [
            "comments[].name",
            "comments[].email",
            { "title": "Yes I want spam.",
              "type": "checkbox",
              "key": "comments[].spam",
              "condition": "model.comments[arrayIndex].email"
            },
            { "type": "textarea",
              "key": "comments[].comment"
            }
          ]
        },
        { "title": "OK",
          "type": "submit",
          "style": "btn-info"
        }
      ]
    };

  }

  addNewBlock(block: number) {
    this.block = block;
    return this.block;
  }

  getAssignBlockJson(jsonOutput: any) {
    console.log(this.blockId);
    this.mainJson[this.blockId] = jsonOutput;
    console.log(this.mainJson);
  }


}
