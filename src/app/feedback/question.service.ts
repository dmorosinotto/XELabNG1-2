import { Injectable, Inject } from 'ng-metadata/core';

export interface Question {
  text: string;
  help?: string;
  resp?: string;
}

@Injectable()
export class QuestionService {
  /** @internal */
  _cache: Question[];
  constructor(@Inject("$q") private $q: angular.IQService ) { 
    this._cache = [
      {text: "Do you know NG1?", help: "Y/N"},
      {text: "How many project did you built with NG1?", help:"1-10"},
      {text: "Has you started studing NG2?"},
      {text: "Do you plan to move to NG2?"},
    ]
  }
  public getQuestions(): angular.IPromise<Question[]>{
    return this.$q.resolve(this._cache);
  }

  public saveResponse(name: string, resp: Question[]) {
    this._cache = resp;
    console.info("NORMALLY DO $http.post(...)", name, "ANSWERS:", resp);
    window.alert(`Thanks ${name} for your feedback:
${JSON.stringify(resp.map(r=>({Q: r.text, A: r.resp})),null,2)}`);
  }

}
