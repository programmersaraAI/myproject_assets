// The classic createElement
// -------------------------
// create a paragraph element using document.createElement
const elem = document.createElement(`p`);
elem.id = `myBrandnewDiv1`;

// put in some text
elem.appendChild(document.createTextNode(`My brand new div #1`));

// append some html (for demo, preferrably don't use innerHTML)
elem.innerHTML += ` =&gt; created using 
  <code>document.createElement</code>`;

// append a new paragraph within #myBrandNewDiv1
const nested = elem.appendChild(document.createElement(`p`));
nested.classList.add(`nested`);
// add some text to that
nested.textContent = `I am nested!`;
// the elements are still in memory, now add the 
// whole enchillada to the document
document.body.appendChild(elem);

// insertAdjacentHTML
// ------------------
// nest an element within the nested div
nested.insertAdjacentHTML(`afterbegin`, 
  `<div id="nestedWithin#nested">
    This text will appear <i>above</i> the text of 
    my parent, that being div#nested.
    Someone had the nerve to insert me using 
    <code>insertAdjacentHTML</code>
   </div>`);

// Object.assign
// -------------
// Use Object.assign to create an element and
// assign properties/html to it in one go
const newElem = Object.assign(
  document.createElement(`div`), 
  { id: `myBrandnewDiv2`, 
    innerHTML: `div#myBrandnewDiv2 signing in. 
      I was <i>assigned</i> using <code>Object.assign</code>&hellip;`});
document.body.appendChild(newElem);

// insertAdjacentElement combined with Object.assign
// -------------------------------------------------
// use the above technique combined with insertAdjacentElement
newElem.insertAdjacentElement(
  `beforeend`,
    Object.assign(document.createElement(`span`), 
      { id: `myBrandnewnested2_nested`, 
        innerHTML: `<br>Me too! And appended I was 
          with <code>insertAdjacentElement</code>` })
);

// createDocumentFragment
// ----------------------
// Use a document fragment to create/inject html
const fragment = document.createDocumentFragment();
const mdnLnk = `https://developer.mozilla.org/en-US/` +
    `docs/Web/API/Document/createDocumentFragment`;
fragment.appendChild(
  Object.assign(
    document.createElement(`p`), 
    {innerHTML: `Regards from <code>createDocumentFragment</code> 
    (see <a href="${mdnLnk}">MDN</a>)`})
);
document.querySelector(`#myBrandnewDiv2`).appendChild(fragment);

// Create, but don't inject
// ------------------------
const virtual = Object.assign(
      document.createElement(`p`), 
      { innerHTML: `       
        <a href="#id1">id1</a>
        <div id="id2">Hi!</div>
        <p id="id3">Hi 2!</p>`,
        classList: [`xyz`], } );

const prepareHtml4Reporting = html => 
  html.replace(/</g, `&lt;`)
    .replace(/\n\s+/g, `\n`)
    .replace(/\n\n/g, `\n`);
    
document.body.insertAdjacentHTML(
  `beforeend`,
  `<h3>html only</h3><pre>${
     prepareHtml4Reporting(virtual.innerHTML)}</pre>`);
body {
  font: normal 12px/15px verdana, arial, sans-serif;
  margin: 2rem;
}

code {
  background-color: #eee;
}

.nested {
  margin-left: 0.7rem;
  max-width: 450px;
  padding: 5px;
  border: 1px solid #ccc;
}