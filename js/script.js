var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function(){supportsPassive=true;}});window.addEventListener("testPassive", null, opts);window.removeEventListener("testPassive", null, opts);} catch (e) {}
// ページ内スクロール---------------------------------------------------
const elem1 = document.querySelector('a[href^="#"]'); //単一の要素を取得
const speed = 600; //スクロールスピード
/*---スマホのときはtouchstart---*/
let flag1 = false;
elem1.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素が押されたら
  flag1 = true;
  let href = elem1.getAttribute("href");/* 属性 */
  let rect1 = href.getBoundingClientRect(); //ブラウザの表示領域の左上を基準とする相対座標を取得
  let scrollTop = document.getElementById(href == "#" || href == "" ? "html" : href ); //スクロール量の取得
  let position = rect1.top + scrollTop; //座標とスクロール量を合算
  $("body,html").animate({ scrollTop: position }, speed, "swing"); //スピードも組み合わせて実行
  return false;
});
/*---PCではclick---*/
elem1.addEventListener("click", function () { //要素がクリックされたら
  if (flag1) {
    flag1 = false;
  } else {
    let href = elem1.getAttribute("href");
    let rect1 = href.getBoundingClientRect();
    let scrollTop = document.getElementById(href == "#" || href == "" ? "html" : href );
    let position = rect1.top + scrollTop;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  }
});
