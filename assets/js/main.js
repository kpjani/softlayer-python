/* 
 * 
 * Python CLI project
 * Boilerplate 2.2.0, Built on 07-05-2014
 * Copyright © 2014 SoftLayer, an IBM Company. All rights reserved.
 * Code and documentation licensed under MIT.
 * 
 */

!function(a){classReg=function(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")},toggleClass=function(a,b){(fn=hasClass(a,b)?removeClass:addClass)(a,b)},hasClass=void 0,addClass=void 0,removeClass=void 0,"classList"in document.documentElement?(hasClass=function(a,b){return a.classList.contains(b)},addClass=function(a,b){a.classList.add(b)},removeClass=function(a,b){a.classList.remove(b)}):(hasClass=function(a,b){return classReg(b).test(a.className)},addClass=function(a,b){hasClass(a,b)||(a.className=a.className+" "+b)},removeClass=function(a,b){a.className=a.className.replace(classReg(b)," ")}),classify={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass},"function"==typeof define&&define.amd?define(classify):"object"==typeof exports?module.exports=classify:a.classify=classify}(window),body=document.body,iconElement=document.getElementById("icon-element"),navElement=document.getElementById("nav-element"),subnavElement=document.getElementById("subnav-element"),toggleElement=document.getElementById("toggle-element"),toggleElement.onclick=function(){classify.toggle(body,"push"),classify.toggle(navElement,"pull"),classify.toggle(iconElement,"hidden"),classify.toggle(toggleElement,"fixed"),void 0!==typeof subnavElement&&null!==subnavElement&&classify.toggle(subnavElement,"hidden")},function(a){a.fn.indexing=function(){headings=a("h1").filter(function(){return this.id}),output=a(this),!headings.length||headings.length<1||!output.length||(get_level=function(a){return parseInt(a.nodeName.replace("H",""),10)},level=get_level(headings[0]),this_level=void 0,html="",headings.on("click",function(){window.location.hash=this.id}).each(function(a,b){this_level=get_level(b),this_level===level&&(html+="<li><a href='#"+b.id+"'>"+b.innerHTML+"</a>"),level=this_level}),output.html(html))}}(jQuery),pageOffset=document.documentElement.scrollTop||document.body.scrollTop,scrollTo=function(a,b,c){start=a.scrollTop,change=b-start,currentTime=0,increment=20,animateScroll=function(){currentTime+=increment,val=Math.easeInOutQuad(currentTime,start,change,c),a.scrollTop=val,c>currentTime&&setTimeout(animateScroll,increment)},Math.easeInOutQuad=function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},animateScroll()},window.onscroll=function(){return pageYOffset>=200?(document.getElementById("top").style.visibility="visible",void(document.getElementById("top").onclick=function(){scrollTo(document.body,0,0)})):void(document.getElementById("top").style.visibility="hidden")},$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),ReadifyHTML5=function(a,b){var c,d,e;if(fixes={article:{role:"article"},aside:{role:"complementary"},nav:{role:"navigation"},main:{role:"main"},section:{role:"region"},output:{"aria-live":"polite"},"[required]":{"aria-required":"true"}},result={ok:[],warn:[],fail:[]},error=result.fail,ATTR_SECURE=new RegExp("aria-[a-z]+|role|tabindex|title|alt|data-[\\w-]+|lang|style|maxlength|placeholder|pattern|required|type|target|accesskey|longdesc"),ID_PREFIX="acfy-id-",n_label=0,docs=document,docs.querySelectorAll){if(a&&(a.header&&(fixes[a.header]={role:"banner"}),a.footer&&(fixes[a.footer]={role:"contentinfo"}),a.main&&(fixes[a.main]={role:"main"},fixes.main={role:""})),b&&b._CONFIG_&&b._CONFIG_.ignore_defaults)fixes=b;else for(e in b)fixes[e]=b[e];for(c in fixes)if(!c.match(/^_(CONFIG|[A-Z]+)_/)&&fixes.hasOwnProperty(c)){try{elems=docs.querySelectorAll(c)}catch(f){ex=f,error.push({sel:c,attr:null,val:null,msg:"Invalid syntax for `document.querySelectorAll` function",ex:ex})}for(obj=fixes[c],(!elems||elems.length<1)&&result.warn.push({sel:c,attr:null,val:null,msg:"Not found"}),i=0;i<elems.length;){for(d in obj)if(obj.hasOwnProperty(d)){if(attr=d,value=obj[d],attr.match(/_?note/))continue;if(!attr.match(ATTR_SECURE)){error.push({sel:c,attr:attr,val:null,msg:"Attribute not allowed",re:ATTR_SECURE});continue}if(!(typeof value).match(/string|number|boolean/)){error.push({sel:c,attr:attr,val:value,msg:"Value-type not allowed"});continue}if(by_match=attr.match(/(describ|label)l?edby/)){try{el_label=docs.querySelector(value)}catch(f){ex=f,error.push({sel:c,attr:attr,val:value,msg:"Invalid selector syntax (2) - see 'val'",ex:ex})}if(!el_label){error.push({sel:c,attr:attr,val:value,msg:"Labelledby ref not found - see 'val'"});continue}el_label.id||(el_label.id=ID_PREFIX+n_label),value=el_label.id,attr="aria-"+("label"===by_match[1]?"labelledby":"describedby"),n_label++}elems[i].hasAttribute(attr)?result.warn.push({sel:c,attr:attr,val:value,msg:"Already present, skipped"}):(elems[i].setAttribute(attr,value),result.ok.push({sel:c,attr:attr,val:value,msg:"Added"}))}i++}}}return result.input=fixes,result},function(a){a.fn.readEstimate=function(b){if(!this.length)return this;var c=this;el=a(this),defaults={readOutput:".estimate",wordCount:null,wordsPerMinute:290,roundup:!0,lessThanOneMinute:"",prependTime:"",prependWord:""},c.settings=a.extend({},defaults,b);var d=c.settings.readOutput;if(wordCount=c.settings.wordCount,wordsPerMinute=c.settings.wordsPerMinute,roundup=c.settings.roundup,e=c.settings.lessThanOneMinute,prependTime=c.settings.prependTime,prependWord=c.settings.prependWord,wordsPerMinute>wordCount){var e=e||"Less than a min read";minuteOutput="min read"}var f=function(b){var c=b.trim().split(/\s+/g).length;wordsPerSecond=wordsPerMinute/60,totalTimeInSeconds=c/wordsPerSecond,roundup===!0?readTimeInMinutes=Math.round(totalTimeInSeconds/60):Math.floor(totalTimeInSeconds/60);var f=Math.round(totalTimeInSeconds-60*readTimeInMinutes);if(roundup===!0)a(d).text(readTimeInMinutes>0?prependTime+readTimeInMinutes+" "+minuteOutput:prependTime+e);else{var g=readTimeInMinutes+":"+f;a(d).text(prependTime+g)}""!==wordCount&&void 0!==wordCount&&a(wordCount).text(prependWord+c)};el.each(function(){f(el.text())})}}(jQuery),featuredElement=document.getElementById("featured-element"),void 0!==typeof featuredElement&&null!==featuredElement&&($.getJSON("https://api.github.com/repos/softlayer/softlayer-python/contributors?callback=?",function(a){numContributors=a.data,$(function(){$("#github-contributors").text(numContributors.length)})}),$.ajax({url:"https://api.github.com/repos/softlayer/softlayer-python?callback?",dataType:"jsonp",success:function(a){numStargazers=a.data,$("#github-stargazers").text(numStargazers.stargazers_count)}}),$.ajax({url:"https://api.github.com/repos/softlayer/softlayer-python/tags?callback?",dataType:"jsonp",success:function(a){lastTag=a.data[0],$("#github-version").text(lastTag.name)}})),function(a){return void 0!==typeof featuredElement&&null!==featuredElement?(repoUrl=function(a){return repoUrls[a.name]||a.html_url},repoDescription=function(a){return repoDescriptions[a.name]||a.description},addRepo=function(b){$item=a("<li>").addClass("repo name "+(b.language||"").toLowerCase()),$link=a("<a>").attr("href",repoUrl(b)).attr("target","_blank").appendTo($item),$link.append(a("<h2>").text(b.name)),$link.append(a("<h4>").text(b.language)),$link.append(a("<h5>").text(b.watchers)),$link.append(a("<h6>").text(b.forks)),$link.append(a("<p>").text(repoDescription(b))),$item.appendTo("#repos")},addRepos=function(b,c){b=b||[],c=c||1,uri="https://api.github.com/orgs/softlayer/repos?callback=?&per_page=50&page="+c,a.getJSON(uri,function(d){return d.data&&d.data.length>0?(b=b.concat(d.data),addRepos(b,c+1)):void a(function(){return a("#github-repos").text(b.length),a.each(b,function(a,b){return b.pushed_at=new Date(b.pushed_at),weekHalfLife=1.146*Math.pow(10,-9),pushDelta="new Date"-Date.parse(b.pushed_at),createdDelta="new Date"-Date.parse(b.created_at),weightForPush=1,weightForWatchers=1.314*Math.pow(10,7),b.popularity=weightForPush*Math.pow(Math.E,-1*weekHalfLife*pushDelta),b.popularity+=weightForWatchers*b.watchers/createdDelta}),b.sort(function(a,b){return a.popularity<b.popularity?1:b.popularity<a.popularity?-1:void 0}),a.each(b,function(a,b){return addRepo(b)}),b.sort(function(a,b){return a.pushed_at<b.pushed_at?1:b.pushed_at<a.pushed_at?-1:void 0})})})},repoUrls={"":""},repoDescriptions={"":""},addRepos()):void 0}(jQuery);