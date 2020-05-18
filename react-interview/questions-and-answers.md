---
layout: default
---

# Phỏng vấn ReactJS - Câu hỏi và trả lời

> Nguồn [React Interview Questions & Answers](https://github.com/sudheerj/reactjs-interview-questions).

> Tác giả [@SudheerJonna](https://twitter.com/SudheerJonna).

### Mục lục {#table-of-contents}

| STT | Câu hỏi                                                                                                                                                                                  |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Core React**                                                                                                                                                                           |
| 1   | [React là gì?](#what-is-react)                                                                                                                                                           |
| 2   | [Những đặc trưng cơ bản của React?](#what-are-the-major-features-of-react)                                                                                                               |
| 3   | [JSX là gì?](#what-is-jsx)                                                                                                                                                               |
| 4   | [Phân biệt các thành phần Components, Elements và Instances?](#what-is-the-difference-between-components-elements-and-instances)                                                         |
| 5   | [Có bao nhiêu cách tạo ra component React?](#how-to-create-components-in-react)                                                                                                          |
| 6   | [Khi nào nên sử dụng Class components thay cho Function Components?](#when-to-use-a-class-component-over-a-function-component)                                                           |
| 7   | [Pure components là gì?](#what-are-pure-components)                                                                                                                                      |
| 8   | [State trong React là gì?](#what-is-state-in-react)                                                                                                                                      |
| 9   | [Props trong React là gì?](#what-are-props-in-react)                                                                                                                                     |
| 10  | [State và Props khác nhau như thế nào?](#what-is-the-difference-between-state-and-props)                                                                                                 |
| 11  | [Tại sao chúng ta không được trực tiếp thay đổi state?](#why-should-we-not-update-the-state-directly)                                                                                    |
| 12  | [Mục đích của hàm callback trong tham số của setState()?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setState)                                                          |
| 13  | [Cho biết điểm khác biệt giữa việc xử lý sự kiện trong HTML và React?](#what-is-the-difference-between-html-and-react-event-handling)                                                    |
| 14  | [Làm thế nào để truyền phương thức hoặc xử lý sự kiện vào trong JSX callbacks?](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks)                                                 |
| 15  | [Có những cách nào để truyền tham số vào hàm xử lý sự kiện hoặc callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)                                                     |
| 16  | [Synthetic events trong ReactJS là gì?](#what-are-synthetic-events-in-react)                                                                                                             |
| 17  | [Biểu thức điều kiện nội tuyến (inline) là gì?](#what-is-inline-conditional-expressions)                                                                                                 |
| 18  | [Từ khóa "key" trong props là gì? và lợi ích của việc sử dụng nó trong mảng?](#what-are-key-props-and-what-is-the-benefit-of-using-them-in-arrays-of-elements)                           |
| 19  | [Cho biết tác dụng của refs?](#what-is-the-use-of-refs)                                                                                                                                  |
| 20  | [Có những cách nào để tạo ra refs?](#how-to-create-refs)                                                                                                                                 |
| 21  | [Refs fordwarding là gì?](#what-are-forward-refs)                                                                                                                                        |
| 22  | [Nên dùng callback refs hay finDOMNode()?](#which-is-preferred-option-with-in-callback-refs-and-finddomnode)                                                                             |
| 23  | [Tại sao string Refs không còn được sử dụng?](#why-are-string-refs-legacy)                                                                                                               |
| 24  | [Virtual DOM là gì?](#what-is-virtual-dom)                                                                                                                                               |
| 25  | [Virtual DOM hoạt động như thế nào?](#how-virtual-dom-works)                                                                                                                             |
| 26  | [Sự khác biệt giữa Shadow DOM và Virtual DOM là gì?](#what-is-the-difference-between-shadow-dom-and-virtual-dom)                                                                         |
| 27  | [React Fiber là gì?](#what-is-react-fiber)                                                                                                                                               |
| 28  | [Mục tiêu chính của của React Fiber là gì?](#what-is-the-main-goal-of-react-fiber)                                                                                                       |
| 29  | [Controlled component là gì?](#what-are-controlled-components)                                                                                                                           |
| 30  | [Uncontrolled components là gì?](#what-are-uncontrolled-components)                                                                                                                      |
| 31  | [createElement và cloneElement khác nhau như thế nào?](#what-is-the-difference-between-createelement-and-cloneelement)                                                                   |
| 32  | [Lifting State Up in React là gì?](#what-is-lifting-state-up-in-react)                                                                                                                   |
| 33  | [Các giai đoạn của component lifecycle khác nhau thế nào?](#what-are-the-different-phases-of-component-lifecycle)                                                                        |
| 34  | [Các phương thức lifecycle trong React là gì?](#what-are-the-lifecycle-methods-of-react)                                                                                                 |
| 35  | [Higher-Order components là gì?](#what-are-higher-order-components)                                                                                                                      |
| 36  | [Làm thế nào để tạo ra props proxy cho HOC component?](#how-to-create-props-proxy-for-hoc-component)                                                                                     |
| 37  | [Context là gì?](#what-is-context)                                                                                                                                                       |
| 38  | [Children prop là gì?](#what-is-children-prop)                                                                                                                                           |
| 39  | [Viết comments cho React như thế nào?](#how-to-write-comments-in-react)                                                                                                                  |
| 40  | [Mục đích của việc dùng hàm khởi tạo super với tham số props là gì?](#what-is-the-purpose-of-using-super-constructor-with-props-argument)                                                |
| 41  | [Reconciliation là gì?](#what-is-reconciliation)                                                                                                                                         |
| 42  | [Làm thế nào để gán giá trị cho state với key động?](#how-to-set-state-with-a-dynamic-key-name)                                                                                          |
| 43  | [Sai lầm thường gặp nào khiến hàm được thực thi mỗi khi component được render?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders)             |
| 44  | [Hàm lazy có hỗ trợ named exports hay không?](#is-lazy-function-supports-named-exports)                                                                                                  |
| 45  | [Vì sao React sử dụng className thay cho thuộc tính class?](#why-react-uses-classname-over-class-attribute)                                                                              |
| 46  | [Fragments là gì?](#what-are-fragments)                                                                                                                                                  |
| 47  | [Tại sao Fragments tốt hơn divs?](#why-fragments-are-better-than-container-divs)                                                                                                         |
| 48  | [Portals trong React là gì?](#what-are-portals-in-react)                                                                                                                                 |
| 49  | [Stateless components là gì?](#what-are-stateless-components)                                                                                                                            |
| 50  | [Stateful components là gì?](#what-are-stateful-components)                                                                                                                              |
| 51  | [Làm cách nào để áp dụng xác nhận đầu vào cho props?](#how-to-apply-validation-on-props-in-react)                                                                                        |
| 52  | [React có những lợi thế nào?](#what-are-the-advantages-of-react)                                                                                                                         |
| 53  | [React có những hạn chế nào?](#what-are-the-limitations-of-react)                                                                                                                        |
| 54  | [Error boundaries trong React v16 là gì?](#what-are-error-boundaries-in-react-v16)                                                                                                       |
| 55  | [Error boundaries ở React v15 hoạt động như thế nào?](#how-error-boundaries-handled-in-react-v15)                                                                                        |
| 56  | [Cách nào được khuyên dùng đề kiểm tra kiểu dữ liệu tĩnh?](#what-are-the-recommended-ways-for-static-type-checking)                                                                      |
| 57  | [Thư viện `react-dom` cung cấp những phương thức nào?](#what-is-the-use-of-react-dom-package)                                                                                            |
| 58  | [Mục đích của phương thức render trong `react-dom` là gì?](#what-is-the-purpose-of-render-method-of-react-dom)                                                                           |
| 59  | [ReactDOMServer là gì?](#what-is-reactdomserver)                                                                                                                                         |
| 60  | [Sử dụng innerHTML trong React như thế nào?](#how-to-use-innerhtml-in-react)                                                                                                             |
| 61  | [Đưa styles vào trong React như thế nào?](#how-to-use-styles-in-react)                                                                                                                   |
| 62  | [Xử lý sự kiện trong React có sự khác biệt nào?](#how-events-are-different-in-react)                                                                                                     |
| 63  | [Điều gì xảy ra khi dùng `setState()` bên trong constructor?](#what-will-happen-if-you-use-setstate-in-constructor)                                                                      |
| 64  | [Tác dụng của số thứ tự (keys) là gì?](#what-is-the-impact-of-indexes-as-keys)                                                                                                           |
| 65  | [Có thể sử dụng `setState()` trong `componentWillMount()` được không?](#is-it-good-to-use-setstate-in-componentwillmount-method)                                                         |
| 66  | [Nếu sử dụng props khi khởi tạo state thì chuyện gì sẽ xảy ra? ](#what-will-happen-if-you-use-props-in-initial-state)                                                                    |
| 67  | [Làm thế nào để render có điều kiện component?](#how-do-you-conditionally-render-components)                                                                                             |
| 68  | [Tại sao chúng ta phải cẩn thận khi sử dụng spreading với props trong DOM?](#why-we-need-to-be-careful-when-spreading-props-on-dom-elements)                                             |
| 69  | [Làm thế nào decorators trong React?](#how-you-use-decorators-in-react)                                                                                                                  |
| 70  | [Làm thế nào để ghi nhớ một component?](#how-do-you-memoize-a-component)                                                                                                                 |
| 71  | [Triển khai SSR như thế nào?](#how-you-implement-server-side-rendering-or-ssr)                                                                                                           |
| 72  | [Chuyển sang chế độ sản phẩm như thế nào?](#how-to-enable-production-mode-in-react)                                                                                                      |
| 73  | [CRA là gì và nó có những lợi ích nào?](#what-is-cra-and-its-benefits)                                                                                                                   |
| 74  | [Thứ tự của các _phương thức vòng đời_ của React ở gian đoạn mouting là gì?](#what-is-the-lifecycle-methods-order-in-mounting)                                                           |
| 75  | [Phương thức vòng đời nào sẽ bị loại bỏ ở React v16?](#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16)                                                               |
| 76  | [Mục đích của phương thức vòng đời `getDerivedStateFromProps()` là gì?](#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method)                                               |
| 77  | [Mục đích của phương thức vòng đời `getSnapshotBeforeUpdate()` là gì?](#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method)                                                 |
| 78  | [Hooks sẽ thay thế cho kết xuất props hay Higher-Order Components?](#do-hooks-replace-render-props-and-higher-order-components)                                                          |
| 79  | [Nên đặt tên cho các component như thế nào?](#what-is-the-recommended-way-for-naming-components)                                                                                         |
| 80  | [Thứ tự các phương thức trong một component nên sắp xếp như thế nào?](#what-is-the-recommended-ordering-of-methods-in-component-class)                                                   |
| 81  | [Component chuyển đổi là gì?](#what-is-a-switching-component)                                                                                                                            |
| 82  | [Tại sao lại cần truyền hàm vào trong hàm `setState()`?](#why-we-need-to-pass-a-function-to-setstate)                                                                                    |
| 83  | [`strict mode` trong React là gì?](#what-is-strict-mode-in-react)                                                                                                                        |
| 84  | [React mixins là gì?](#what-are-react-mixins)                                                                                                                                            |
| 85  | [Tại sao `isMounted()` là một cách tiếp cận tồi và giải pháp thích hợp là gì?](#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution)                                        |
| 86  | [What are the Pointer Events supported in React?](#what-are-the-pointer-events-supported-in-react)                                                                                       |
| 87  | [Why should component names start with capital letter?](#why-should-component-names-start-with-capital-letter)                                                                           |
| 88  | [Are custom DOM attributes supported in React v16?](#are-custom-dom-attributes-supported-in-react-v16)                                                                                   |
| 89  | [What is the difference between constructor and getInitialState?](#what-is-the-difference-between-constructor-and-getinitialstate)                                                       |
| 90  | [Can you force a component to re-render without calling setState?](#can-you-force-a-component-to-re-render-without-calling-setstate)                                                     |
| 91  | [What is the difference between super() and super(props) in React using ES6 classes?](#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes)                   |
| 92  | [How to loop inside JSX?](#how-to-loop-inside-jsx)                                                                                                                                       |
| 93  | [How do you access props in attribute quotes?](#how-do-you-access-props-in-attribute-quotes)                                                                                             |
| 94  | [What is React PropType array with shape?](#what-is-react-proptype-array-with-shape)                                                                                                     |
| 95  | [How to conditionally apply class attributes?](#how-to-conditionally-apply-class-attributes)                                                                                             |
| 96  | [What is the difference between React and ReactDOM?](#what-is-the-difference-between-react-and-reactdom)                                                                                 |
| 97  | [Why ReactDOM is separated from React?](#why-reactdom-is-separated-from-react)                                                                                                           |
| 98  | [How to use React label element?](#how-to-use-react-label-element)                                                                                                                       |
| 99  | [How to combine multiple inline style objects?](#how-to-combine-multiple-inline-style-objects)                                                                                           |
| 100 | [How to re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized)                                                                         |
| 101 | [What is the difference between setState and replaceState methods?](#what-is-the-difference-between-setstate-and-replacestate-methods)                                                   |
| 102 | [How to listen to state changes?](#how-to-listen-to-state-changes)                                                                                                                       |
| 103 | [What is the recommended approach of removing an array element in react state?](#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state)                           |
| 104 | [Is it possible to use React without rendering HTML?](#is-it-possible-to-use-react-without-rendering-html)                                                                               |
| 105 | [How to pretty print JSON with React?](#how-to-pretty-print-json-with-react)                                                                                                             |
| 106 | [Why you can't update props in React?](#why-you-cant-update-props-in-react)                                                                                                              |
| 107 | [How to focus an input element on page load?](#how-to-focus-an-input-element-on-page-load)                                                                                               |
| 108 | [What are the possible ways of updating objects in state?](#what-are-the-possible-ways-of-updating-objects-in-state)                                                                     |
| 109 | [Why function is preferred over object for setState?](#why-function-is-preferred-over-object-for-setstate)                                                                               |
| 110 | [How can we find the version of React at runtime in the browser?](#how-can-we-find-the-version-of-react-at-runtime-in-the-browser)                                                       |
| 111 | [What are the approaches to include polyfills in your create-react-app?](#what-are-the-approaches-to-include-polyfills-in-your-create-react-app)                                         |
| 112 | [How to use https instead of http in create-react-app?](#how-to-use-https-instead-of-http-in-create-react-app)                                                                           |
| 113 | [How to avoid using relative path imports in create-react-app?](#how-to-avoid-using-relative-path-imports-in-create-react-app)                                                           |
| 114 | [How to add Google Analytics for react-router?](#how-to-add-google-analytics-for-react-router)                                                                                           |
| 115 | [How to update a component every second?](#how-to-update-a-component-every-second)                                                                                                       |
| 116 | [How do you apply vendor prefixes to inline styles in React?](#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react)                                                               |
| 117 | [How to import and export components using react and ES6?](#how-to-import-and-export-components-using-react-and-es6)                                                                     |
| 118 | [Why React component names must begin with a capital letter?](#why-react-component-names-must-begin-with-a-capital-letter)                                                               |
| 119 | [Why is a component constructor called only once?](#why-is-a-component-constructor-called-only-once)                                                                                     |
| 120 | [How to define constants in React?](#how-to-define-constants-in-react)                                                                                                                   |
| 121 | [How to programmatically trigger click event in React?](#how-to-programmatically-trigger-click-event-in-react)                                                                           |
| 122 | [Is it possible to use async/await in plain React?](#is-it-possible-to-use-asyncawait-in-plain-react)                                                                                    |
| 123 | [What are the common folder structures for React?](#what-are-the-common-folder-structures-for-react)                                                                                     |
| 124 | [What are the popular packages for animation?](#what-are-the-popular-packages-for-animation)                                                                                             |
| 125 | [What is the benefit of styles modules?](#what-is-the-benefit-of-styles-modules)                                                                                                         |
| 126 | [What are the popular React-specific linters?](#what-are-the-popular-react-specific-linters)                                                                                             |
| 127 | [How to make AJAX call and In which component lifecycle methods should I make an AJAX call?](#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call) |
| 128 | [What are render props?](#what-are-render-props)                                                                                                                                         |
|     | **React Router**                                                                                                                                                                         |
| 129 | [What is React Router?](#what-is-react-router)                                                                                                                                           |
| 130 | [How React Router is different from history library?](#how-react-router-is-different-from-history-library)                                                                               |
| 131 | [What are the \<Router> components of React Router v4?](#what-are-the-router-components-of-react-router-v4)                                                                              |
| 132 | [What is the purpose of push and replace methods of history?](#what-is-the-purpose-of-push-and-replace-methods-of-history)                                                               |
| 133 | [How do you programmatically navigate using React router v4?](#how-do-you-programmatically-navigate-using-react-router-v4)                                                               |
| 134 | [How to get query parameters in React Router v4](#how-to-get-query-parameters-in-react-router-v4)                                                                                        |
| 135 | [Why you get "Router may have only one child element" warning?](#why-you-get-router-may-have-only-one-child-element-warning)                                                             |
| 136 | [How to pass params to history.push method in React Router v4?](#how-to-pass-params-to-historypush-method-in-react-router-v4)                                                            |
| 137 | [How to implement default or NotFound page?](#how-to-implement-default-or-notfound-page)                                                                                                 |
| 138 | [How to get history on React Router v4?](#how-to-get-history-on-react-router-v4)                                                                                                         |
| 139 | [How to perform automatic redirect after login?](#how-to-perform-automatic-redirect-after-login)                                                                                         |
|     | **React Internationalization**                                                                                                                                                           |
| 140 | [What is React-Intl?](#what-is-react-intl)                                                                                                                                               |
| 141 | [What are the main features of React Intl?](#what-are-the-main-features-of-react-intl)                                                                                                   |
| 142 | [What are the two ways of formatting in React Intl?](#what-are-the-two-ways-of-formatting-in-react-intl)                                                                                 |
| 143 | [How to use FormattedMessage as placeholder using React Intl?](#how-to-use-formattedmessage-as-placeholder-using-react-intl)                                                             |
| 144 | [How to access current locale with React Intl](#how-to-access-current-locale-with-react-intl)                                                                                            |
| 145 | [How to format date using React Intl?](#how-to-format-date-using-react-intl)                                                                                                             |
|     | **React Testing**                                                                                                                                                                        |
| 146 | [What is Shallow Renderer in React testing?](#what-is-shallow-renderer-in-react-testing)                                                                                                 |
| 147 | [What is TestRenderer package in React?](#what-is-testrenderer-package-in-react)                                                                                                         |
| 148 | [What is the purpose of ReactTestUtils package?](#what-is-the-purpose-of-reacttestutils-package)                                                                                         |
| 149 | [What is Jest?](#what-is-jest)                                                                                                                                                           |
| 150 | [What are the advantages of Jest over Jasmine?](#what-are-the-advantages-of-jest-over-jasmine)                                                                                           |
| 151 | [Give a simple example of Jest test case](#give-a-simple-example-of-jest-test-case)                                                                                                      |
|     | **React Redux**                                                                                                                                                                          |
| 152 | [What is Flux?](#what-is-flux)                                                                                                                                                           |
| 153 | [What is Redux?](#what-is-redux)                                                                                                                                                         |
| 154 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux)                                                                                                         |
| 155 | [What are the downsides of Redux compared to Flux?](#what-are-the-downsides-of-redux-compared-to-flux)                                                                                   |
| 156 | [What is the difference between mapStateToProps() and mapDispatchToProps()?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)                                     |
| 157 | [Can I dispatch an action in reducer?](#can-i-dispatch-an-action-in-reducer)                                                                                                             |
| 158 | [How to access Redux store outside a component?](#how-to-access-redux-store-outside-a-component)                                                                                         |
| 159 | [What are the drawbacks of MVW pattern](#what-are-the-drawbacks-of-mvw-pattern)                                                                                                          |
| 160 | [Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs)                                                                                 |
| 161 | [How to dispatch an action on load?](#how-to-dispatch-an-action-on-load)                                                                                                                 |
| 162 | [How to use connect from React Redux?](#how-to-use-connect-from-react-redux)                                                                                                             |
| 163 | [How to reset state in Redux?](#how-to-reset-state-in-redux)                                                                                                                             |
| 164 | [Whats the purpose of at symbol in the redux connect decorator?](#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator)                                                         |
| 165 | [What is the difference between React context and React Redux?](#what-is-the-difference-between-react-context-and-react-redux)                                                           |
| 166 | [Why are Redux state functions called reducers?](#why-are-redux-state-functions-called-reducers)                                                                                         |
| 167 | [How to make AJAX request in Redux?](#how-to-make-ajax-request-in-redux)                                                                                                                 |
| 168 | [Should I keep all component's state in Redux store?](#should-i-keep-all-components-state-in-redux-store)                                                                                |
| 169 | [What is the proper way to access Redux store?](#what-is-the-proper-way-to-access-redux-store)                                                                                           |
| 170 | [What is the difference between component and container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux)                                         |
| 171 | [What is the purpose of the constants in Redux? ](#what-is-the-purpose-of-the-constants-in-redux)                                                                                        |
| 172 | [What are the different ways to write mapDispatchToProps()?](#what-are-the-different-ways-to-write-mapdispatchtoprops)                                                                   |
| 173 | [What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?](#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops)         |
| 174 | [How to structure Redux top level directories?](#how-to-structure-redux-top-level-directories)                                                                                           |
| 175 | [What is redux-saga?](#what-is-redux-saga)                                                                                                                                               |
| 176 | [What is the mental model of redux-saga?](#what-is-the-mental-model-of-redux-saga)                                                                                                       |
| 177 | [What are the differences between call and put in redux-saga](#what-are-the-differences-between-call-and-put-in-redux-saga)                                                              |
| 178 | [What is Redux Thunk?](#what-is-redux-thunk)                                                                                                                                             |
| 179 | [What are the differences between redux-saga and redux-thunk](#what-are-the-differences-between-redux-saga-and-redux-thunk)                                                              |
| 180 | [What is Redux DevTools?](#what-is-redux-devtools)                                                                                                                                       |
| 181 | [What are the features of Redux DevTools?](#what-are-the-features-of-redux-devtools)                                                                                                     |
| 182 | [What are Redux selectors and Why to use them?](#what-are-redux-selectors-and-why-to-use-them)                                                                                           |
| 183 | [What is Redux Form?](#what-is-redux-form)                                                                                                                                               |
| 184 | [What are the main features of Redux Form?](#what-are-the-main-features-of-redux-form)                                                                                                   |
| 185 | [How to add multiple middlewares to Redux?](#how-to-add-multiple-middlewares-to-redux)                                                                                                   |
| 186 | [How to set initial state in Redux?](#how-to-set-initial-state-in-redux)                                                                                                                 |
| 187 | [How Relay is different from Redux?](#how-relay-is-different-from-redux)                                                                                                                 |
|     | **React Native**                                                                                                                                                                         |
| 188 | [What is the difference between React Native and React?](#what-is-the-difference-between-react-native-and-react)                                                                         |
| 189 | [How to test React Native apps?](#how-to-test-react-native-apps)                                                                                                                         |
| 190 | [How to do logging in React Native?](#how-to-do-logging-in-react-native)                                                                                                                 |
| 191 | [How to debug your React Native?](#how-to-debug-your-react-native)                                                                                                                       |
|     | **React supported libraries and Integration**                                                                                                                                            |
| 192 | [What is reselect and how it works?](#what-is-reselect-and-how-it-works)                                                                                                                 |
| 193 | [What is Flow?](#what-is-flow)                                                                                                                                                           |
| 194 | [What is the difference between Flow and PropTypes?](#what-is-the-difference-between-flow-and-proptypes)                                                                                 |
| 195 | [How to use font-awesome icons in React?](#how-to-use-font-awesome-icons-in-react)                                                                                                       |
| 196 | [What is React Dev Tools?](#what-is-react-dev-tools)                                                                                                                                     |
| 197 | [Why is DevTools not loading in Chrome for local files?](#why-is-devtools-not-loading-in-chrome-for-local-files)                                                                         |
| 198 | [How to use Polymer in React?](#how-to-use-polymer-in-react)                                                                                                                             |
| 199 | [What are the advantages of React over Vue.js?](#what-are-the-advantages-of-react-over-vuejs)                                                                                            |
| 200 | [What is the difference between React and Angular?](#what-is-the-difference-between-react-and-angular)                                                                                   |
| 201 | [Why React tab is not showing up in DevTools?](#why-react-tab-is-not-showing-up-in-devtools)                                                                                             |
| 202 | [What are styled components?](#what-are-styled-components)                                                                                                                               |
| 203 | [Give an example of Styled Components?](#give-an-example-of-styled-components)                                                                                                           |
| 204 | [What is Relay?](#what-is-relay)                                                                                                                                                         |
| 205 | [How to use TypeScript in create-react-app application?](#how-to-use-typescript-in-create-react-app-application)                                                                         |
|     | **Miscellaneous**                                                                                                                                                                        |
| 206 | [What are the main features of reselect library?](#what-are-the-main-features-of-reselect-library)                                                                                       |
| 207 | [Give an example of reselect usage?](#give-an-example-of-reselect-usage)                                                                                                                 |
| 208 | [What is an action in Redux?](#what-is-an-action-in-redux)                                                                                                                               |
| 209 | [Does the statics object work with ES6 classes in React?](#does-the-statics-object-work-with-es6-classes-in-react)                                                                       |
| 210 | [Can Redux only be used with React?](#can-redux-only-be-used-with-react)                                                                                                                 |
| 211 | [Do you need to have a particular build tool to use Redux?](#do-you-need-to-have-a-particular-build-tool-to-use-redux)                                                                   |
| 212 | [How Redux Form initialValues get updated from state?](#how-redux-form-initialvalues-get-updated-from-state)                                                                             |
| 213 | [How React PropTypes allow different type for one prop?](#how-react-proptypes-allow-different-types-for-one-prop)                                                                        |
| 214 | [Can I import an SVG file as react component?](#can-i-import-an-svg-file-as-react-component)                                                                                             |
| 215 | [Why are inline ref callbacks or functions not recommended?](#why-are-inline-ref-callbacks-or-functions-not-recommended)                                                                 |
| 216 | [What is render hijacking in React?](#what-is-render-hijacking-in-react)                                                                                                                 |
| 217 | [What are HOC factory implementations?](#what-are-hoc-factory-implementations)                                                                                                           |
| 218 | [How to pass numbers to React component?](#how-to-pass-numbers-to-react-component)                                                                                                       |
| 219 | [Do I need to keep all my state into Redux? Should I ever use react internal state?](#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state)                  |
| 220 | [What is the purpose of registerServiceWorker in React?](#what-is-the-purpose-of-registerserviceworker-in-react)                                                                         |
| 221 | [What is React memo function?](#what-is-react-memo-function)                                                                                                                             |
| 222 | [What is React lazy function?](#what-is-react-lazy-function)                                                                                                                             |
| 223 | [How to prevent unnecessary updates using setState?](#how-to-prevent-unnecessary-updates-using-setstate)                                                                                 |
| 224 | [How do you render Array, Strings and Numbers in React 16 Version?](#how-do-you-render-array-strings-and-numbers-in-react-16-version)                                                    |
| 225 | [How to use class field declarations syntax in React classes?](#how-to-use-class-field-declarations-syntax-in-react-classes)                                                             |
| 226 | [What are hooks?](#what-are-hooks)                                                                                                                                                       |
| 227 | [What are the rules needs to follow for hooks?](#what-are-the-rules-needs-to-follow-for-hooks)                                                                                           |
| 228 | [How to ensure hooks followed the rules in your project?](#how-to-ensure-hooks-followed-the-rules-in-your-project)                                                                       |
| 229 | [What are the differences between Flux and Redux?](#what-are-the-differences-between-flux-and-redux)                                                                                     |
| 230 | [What are the benefits of React Router V4?](#what-are-the-benefits-of-react-router-v4)                                                                                                   |
| 231 | [Can you describe about componentDidCatch lifecycle method signature?](#can-you-describe-about-componentdidcatch-lifecycle-method-signature)                                             |
| 232 | [In which scenarios error boundaries do not catch errors?](#in-which-scenarios-error-boundaries-do-not-catch-errors)                                                                     |
| 233 | [Why do not you need error boundaries for event handlers?](#why-do-not-you-need-error-boundaries-for-event-handlers)                                                                     |
| 234 | [What is the difference between try cath block and error boundaries?](#what-is-the-difference-between-try-catch-block-and-error-boundaries)                                              |
| 235 | [What is the behavior of uncaught errors in react 16?](#what-is-the-behavior-of-uncaught-errors-in-react-16)                                                                             |
| 236 | [What is the proper placement for error boundaries?](#what-is-the-proper-placement-for-error-boundaries)                                                                                 |
| 237 | [What is the benefit of component stack trace from error boundary?](#what-is-the-benefit-of-component-stack-trace-from-error-boundary)                                                   |
| 238 | [What is the required method to be defined for a class component?](#what-is-the-required-method-to-be-defined-for-a-class-component)                                                     |
| 239 | [What are the possible return types of render method?](#what-are-the-possible-return-types-of-render-method)                                                                             |
| 240 | [What is the main purpose of constructor?](#what-is-the-main-purpose-of-constructor)                                                                                                     |
| 241 | [Is it mandatory to define constructor for React component?](#is-it-mandatory-to-define-constructor-for-react-component)                                                                 |
| 242 | [What are default props?](#what-are-default-props)                                                                                                                                       |
| 243 | [Why should not call setState in componentWillUnmount?](#why-should-not-call-setstate-in-componentwillunmount)                                                                           |
| 244 | [What is the purpose of getDerivedStateFromError?](#what-is-the-purpose-of-getderivedstatefromerror)                                                                                     |
| 245 | [What is the methods order when component re-rendered?](#what-is-the-methods-order-when-component-re-rendered)                                                                           |
| 246 | [What are the methods invoked during error handling?](#what-are-the-methods-invoked-during-error-handling)                                                                               |
| 247 | [What is the purpose of displayName class property?](#what-is-the-purpose-of-displayname-class-property)                                                                                 |
| 248 | [What is the browser support for react applications?](#what-is-the-browser-support-for-react-applications)                                                                               |
| 249 | [What is the purpose of unmountComponentAtNode method?](#what-is-the-purpose-of-unmountcomponentatnode-method)                                                                           |
| 250 | [What is code-splitting?](#what-is-code-splitting)                                                                                                                                       |
| 251 | [What is the benefit of strict mode?](#what-is-the-benefit-of-strict-mode)                                                                                                               |
| 252 | [What are Keyed Fragments?](#what-are-keyed-fragments)                                                                                                                                   |
| 253 | [Does React support all HTML attributes?](#does-react-support-all-html-attributes)                                                                                                       |
| 254 | [What are the limitations with HOCs?](#what-are-the-limitations-with-hocs)                                                                                                               |
| 255 | [How to debug forwardRefs in DevTools?](#how-to-debug-forwardrefs-in-devtools)                                                                                                           |
| 256 | [When component props defaults to true?](#when-component-props-defaults-to-true)                                                                                                         |
| 257 | [What is NextJS and major features of it?](#what-is-nextjs-and-major-features-of-it)                                                                                                     |
| 258 | [How do you pass an event handler to a component?](#how-do-you-pass-an-event-handler-to-a-component)                                                                                     |
| 259 | [Is it good to use arrow functions in render methods?](#is-it-good-to-use-arrow-functions-in-render-methods)                                                                             |
| 260 | [How to prevent a function from being called multiple times?](#how-to-prevent-a-function-from-being-called-multiple-times)                                                               |
| 261 | [How JSX prevents Injection Attacks?](#how-jsx-prevents-injection-attacks)                                                                                                               |
| 262 | [How do you update rendered elements?](#how-do-you-update-rendered-elements)                                                                                                             |
| 263 | [How do you say that props are read only?](#how-do-you-say-that-props-are-read-only)                                                                                                     |
| 264 | [How do you say that state updates are merged?](#how-do-you-say-that-state-updates-are-merged)                                                                                           |
| 265 | [How do you pass arguments to an event handler?](#how-do-you-pass-arguments-to-an-event-handler)                                                                                         |
| 266 | [How to prevent component from rendering?](#how-to-prevent-component-from-rendering)                                                                                                     |
| 267 | [What are the conditions to safely use the index as a key?](#what-are-the-conditions-to-safely-use-the-index-as-a-key)                                                                   |
| 268 | [Is it keys should be globally unique?](#is-it-keys-should-be-globally-unique)                                                                                                           |
| 269 | [What is the popular choice for form handling?](#what-is-the-popular-choice-for-form-handling)                                                                                           |
| 270 | [What are the advantages of formik over redux form library?](#what-are-the-advantages-of-formik-over-redux-form-library)                                                                 |
| 271 | [Why do you not required to use inheritance?](#why-do-you-not-required-to-use-inheritance)                                                                                               |
| 272 | [Can I use web components in react application?](#can-i-use-web-components-in-react-application)                                                                                         |
| 273 | [What is dynamic import?](#what-is-dynamic-import)                                                                                                                                       |
| 274 | [What are loadable components?](#what-are-loadable-components)                                                                                                                           |
| 275 | [What is suspense component?](#what-is-suspense-component)                                                                                                                               |
| 276 | [What is route based code splitting?](#what-is-route-based-code-splitting)                                                                                                               |
| 277 | [Give an example on How to use context?](#give-an-example-on-how-to-use-context)                                                                                                         |
| 278 | [What is the purpose of default value in context?](#what-is-the-purpose-of-default-value-in-context)                                                                                     |
| 279 | [How do you use contextType?](#how-do-you-use-contexttype)                                                                                                                               |
| 280 | [What is a consumer?](#what-is-a-consumer)                                                                                                                                               |
| 281 | [How do you solve performance corner cases while using context?](#how-do-you-solve-performance-corner-cases-while-using-context)                                                         |
| 282 | [What is the purpose of forward ref in HOCs?](#what-is-the-purpose-of-forward-ref-in-hocs)                                                                                               |
| 283 | [Is it ref argument available for all functions or class components?](#is-it-ref-argument-available-for-all-functions-or-class-components)                                               |
| 284 | [Why do you need additional care for component libraries while using forward refs?](#why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs)                   |
| 285 | [How to create react class components without ES6?](#how-to-create-react-class-components-without-es6)                                                                                   |
| 286 | [Is it possible to use react without JSX?](#is-it-possible-to-use-react-without-jsx)                                                                                                     |
| 287 | [What is diffing algorithm?](#what-is-diffing-algorithm)                                                                                                                                 |
| 288 | [What are the rules covered by diffing algorithm?](#what-are-the-rules-covered-by-diffing-algorithm)                                                                                     |
| 289 | [When do you need to use refs?](#when-do-you-need-to-use-refs)                                                                                                                           |
| 290 | [Is it prop must be named as render for render props?](#is-it-prop-must-be-named-as-render-for-render-props)                                                                             |
| 291 | [What are the problems of using render props with pure components?](#what-are-the-problems-of-using-render-props-with-pure-components)                                                   |
| 292 | [How do you create HOC using render props?](#how-do-you-create-hoc-using-render-props)                                                                                                   |
| 293 | [What is windowing technique?](#what-is-windowing-technique)                                                                                                                             |
| 294 | [How do you print falsy values in JSX?](#how-do-you-print-falsy-values-in-jsx)                                                                                                           |
| 295 | [What is the typical use case of portals?](#what-is-the-typical-use-case-of-portals?)                                                                                                    |
| 296 | [How do you set default value for uncontrolled component?](#how-do-you-set-default-value-for-uncontrolled-component)                                                                     |
| 297 | [What is your favorite React stack?](#what-is-your-favorite-react-stack)                                                                                                                 |
| 298 | [What is the difference between Real DOM and Virtual DOM?](#what-is-the-difference-between-real-dom-and-virtual-dom)                                                                     |
| 299 | [How to add Bootstrap to a react application?](#how-to-add-bootstrap-to-react-application)                                                                                               |
| 300 | [Can you list down top websites or applications using react as front end framework?](#can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework)                 |
| 301 | [Is it recommended to use CSS In JS technique in React?](#is-it-recommended-to-use-css-in-js-technique-in-react)                                                                         |
| 302 | [Do I need to rewrite all my class components with hooks?](#do-i-need-to-rewrite-all-my-class-components-with-hooks)                                                                     |
| 303 | [How to fetch data with React Hooks?](#how-to-fetch-data-with-react-hooks)                                                                                                               |
| 304 | [Is Hooks cover all use cases for classes?](#is-hooks-cover-all-use-cases-for-classes)                                                                                                   |
| 305 | [What is the stable release for hooks support?](#what-is-the-stable-release-for-hooks-support)                                                                                           |
| 306 | [Why do we use array destructuring (square brackets notation) in useState?](#why-do-we-use-array-destructuring-square-brackets-notation-in-usestate)                                     |
| 307 | [What are the sources used for introducing hooks?](#what-are-the-sources-used-for-introducing-hooks)                                                                                     |
| 308 | [How do you access imperative API of web components?](#how-do-you-access-imperative-api-of-web-components)                                                                               |
| 309 | [What is formik?](#what-is-formik)                                                                                                                                                       |
| 310 | [What are typical middleware choices for handling asynchronous calls in Redux?](#what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux)                           |
| 311 | [Is browsers understand JSX code?](#is-browsers-understand-jsx-code)                                                                                                                     |
| 312 | [Describe about data flow in react?](#describe-about-data-flow-in-react)                                                                                                                 |
| 313 | [What is react scripts?](#what-is-react-scripts)                                                                                                                                         |
| 314 | [What are the features of create react app?](#what-are-the-features-of-create-react-app)                                                                                                 |
| 315 | [What is the purpose of renderToNodeStream method?](#what-is-the-purpose-of-rendertonodestream-method)                                                                                   |
| 316 | [What is MobX?](#what-is-mobx)                                                                                                                                                           |
| 317 | [What are the differences between Redux and MobX?](#what-are-the-differences-between-redux-and-mobx)                                                                                     |
| 318 | [Should I learn ES6 before learning ReactJS?](#should-i-learn-es6-before-learning-reactjs)                                                                                               |
| 319 | [What is Concurrent Rendering?](#what-is-concurrent-rendering)                                                                                                                           |
| 320 | [What is the difference between async mode and concurrent mode?](#what-is-the-difference-between-async-mode-and-concurrent-mode)                                                         |
| 321 | [Can I use javascript urls in react16.9?](#can-i-use-javascript-urls-in-react16.9)                                                                                                       |
| 322 | [What is the purpose of eslint plugin for hooks?](#what-is-the-purpose-of-eslint-plugin-for-hooks)                                                                                       |
| 323 | [What is the difference between Imperative and Declarative in React?](#what-is-the-difference-between-imperative-and-declarative-in-react)                                               |
| 324 | (#) ?                                                                                                                                                                                    |

## Core React

1. ### React là gì? {#what-is-react}

   React là một **thư viện JavaScript mã nguồn mở về front-end** sử dụng để xây dựng giao diện người dùng đặc biệt là dành cho các ứng dụng đơn trang (SPA Single-page Application). React giúp xây dựng tầng Views của các ứng dụng web cũng như mobile. Được tạo ra bởi Jordan Walke, một kỹ sư phần mềm làm việc tại Facebook. React được sử dụng lần đầu tiên trên Facebook năm 2011 và trên Instagram năm 2012.

   **[⬆ Mục lục](#table-of-contents)**

2. ### Những đặc trưng cơ bản của React? {#what-are-the-major-features-of-react}

   Những đặc trưng cơ bản của React là:

   - Sử dụng **VirtualDOM** thay cho RealDOM giúp tăng hiệu năng của ứng dụng.
   - Hỗ trợ **server-side rendering**.
   - Sử dụng **One way data binding**.
   - Sử dụng các UI components có thể **tái sử dụng/tổ hợp**.

   **[⬆ Mục lục](#table-of-contents)**

3. ### JSX là gì? {#what-is-JSX}

   _JSX_ là một cú pháp mở rộng cho JavaScript (ECMAScript), có dạng gần giống như XML (JSX = JavaScript + XML). Cơ bản thì JSX cung cấp cú pháp thân thiện cho hàm `React.createElement()`, giúp chúng ta code ReactJS bằng cú pháp của XML (thay vì JavaScript), Các thành phần của XML sẽ được chuyển đổi thành các tham số truyền vào hàm `React.createElement()`.

   Ví dụ dưới đây sẽ cho thấy tại sao nên dùng JSX

   ```jsx
   class App extends React.Component {
     render() {
       return (
         <div>
           <h1>{'Welcome to React world!'}</h1>
         </div>
       );
     }
   }
   ```

   ```js
   React.createElement(App, null, React.createElement('div', null, React.createElement('h1', null, 'Welcome to React world!')));
   ```

   **[⬆ Mục lục](#table-of-contents)**

4. ### Phân biệt các thành phần Components, Elements và Instances? {#what-is-the-difference-between-components-elements-and-instances}

   Một _Element_ là một object mô tả, đại diện cho những gì bạn muốn thấy trên màn hình, có thể là một DOM node hoặc những components khác. _Elements_ có thể chứa các _Elements_ khác trong props của mình. Một khi element được tạo ra, nó sẽ không bao giờ bị thay đổi (mutated).

   Chú ý ở đây chỉ dùng từ đại diện, element không phải là instance của component, nó ko thực sự là những gì bạn sẽ nhìn thấy trên màn hình, nó đơn giản là một object đại diện cho component instance được tạo ra. Một object với các thuộc tính như _key_, _props_, _ref_ và _type_

   Ví dụ về object đại diện của React Element như sau:

   ```js
   const element = React.createElement('div', { id: 'login-btn' }, 'Login');
   ```

   Hàm `React.createElement()` bên trên sẽ trả về một object như sau:

   ```
   {
     type: 'div',
     props: {
       children: 'Login',
       id: 'login-btn'
     }
   }
   ```

   Và cuối cùng sẽ trả về một DOM node bằng việc sử dụng `ReactDOM.render()`:

   ```html
   <div id="login-btn">Login</div>
   ```

   Trong khi đó, **Components** là các khối xây dựng lên React. Nó có thể là một class với phương thức `render()`. Hoặc, đơn giản hơn, có thể định nghĩa dưới dạng function. Trong cả hai trường hợp, nó tiếp nhận các giá trị đầu vào làm próp, và trả về React element hay JSX tree:

   ```js
   const Button = ({ onLogin }) => (
     <div id={'login-btn'} onClick={onLogin}>
       Login
     </div>
   );
   ```

   JSX biên dịch thành hàm `React.createElement()`:

   ```js
   const Button = ({ onLogin }) => React.createElement('div', { id: 'login-btn', onClick: onLogin }, 'Login');
   ```

   Tham khảo thêm tại:

   [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html).

   [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components).

   **[⬆ Mục lục](#table-of-contents)**

5. ### Có bao nhiêu cách tạo ra component React? {#how-to-create-components-in-react}

   Có 2 cách để tạo nên một component

   1. **Function Components:** Đây là cách đơn giản nhất. Thuần túy sử dụng hàm trong JavaScript với props là tham số đầu tiên và trả về React elements:

      ```jsx
      function Greeting({ message }) {
        return <h1>{`Hello, ${message}`}</h1>;
      }
      ```

   2. **Class Components:** Bạn có thể sử dụng class trong ES6 để định nghĩa một component. Component ở trên có thể sử dụng class để khai báo như sau:

      ```jsx
      class Greeting extends React.Component {
        render() {
          return <h1>{`Hello, ${this.props.message}`}</h1>;
        }
      }
      ```

   **[⬆ Mục lục](#table-of-contents)**

6. ### Khi nào nên sử dụng Class components thay cho Function Components? {#when-to-use-a-class-component-over-a-function-component}

   Sử dụng Class components trong trường hợp component cần có _state hoặc các phương thức lifecycle_, nếu không hãy sử dụng Function components.

   _Tuy nhiên, từ phiên bản React 16.8, với sự bổ sung của Hooks, chúng ta đã có thể sử dụng state, các phương thức lifecycle cũng như các tính năng chỉ có ở Class components trong Function components._

   **[⬆ Mục lục](#table-of-contents)**

7. ### Pure components là gì? {#what-are-pure-components}

   _`React.PureComponent`_ hoàn toàn giống với _`React.Component`_ ngoại từ việc nó tự xử lý phương thức `shouldComponentUpdate()`. Khi props hoặc state thay đổi, _PureComponent_ sẽ thực hiện một phép so sánh nông (shallow comparison) đối với cả props và state. Mặt khác _Component_ sẽ không so sánh props và state của trước và sau thay đổi, mà sẽ mặc định render lại bất cứ khi nào `shouldComponentUpdate` được gọi.

   Tiền đề của _`React.PureComponent`_ là một phiên bản có hiệu suất cao hơn Component. Tại sao?
   Trước hết hãy tìm hiểu So sánh nông (Shallow Comparion) là gì? Nó là phép so sánh giữa state và nextState, cũng như props và nextProps, tuy nhiên chỉ so sánh value của các key của 2 input, ko tiếp tục so sánh đến các nhánh dưới nếu value là object, array.

   Trong một dự án bình thường, cây component có thể rất phức tạp, Shallow comparion lại là một hoạt động vô cùng rẻ tiền, rẻ hơn so với chi phí deep comparion và rẻ hơn rất nhiều so với chi phí render lại từng component con trong tree. Nhờ đó perfomance UI được cải thiện.

   **[⬆ Mục lục](#table-of-contents)**

8. ### State trong React là gì? {#what-is-state-in-react}

   _State_ của một component là một object chứa một số thông tin có thể thay đổi trong suốt vòng đời (lifecycle) của component. Chúng ta luôn phải giữ cho state đơn giản nhất có thể và giữ ở mức tối thiếu các component phụ thuộc vào state (stateful components). Ví dụ

   ```jsx
   class User extends React.Component {
     constructor(props) {
       super(props);

       this.state = {
         message: 'Welcome to React world',
       };
     }

     render() {
       return (
         <div>
           <h1>{this.state.message}</h1>
         </div>
       );
     }
   }
   ```

   ![state](images/state.jpg)

   State tương tụ như props, nhưng nó là riêng tư và được component toàn quyền kiếm soát. Tức là, state không thể truy cập bởi bất cứ component nào khác ngoài component sở hữu nó.

   **[⬆ Mục lục](#table-of-contents)**

9. ### Props trong React là gì? {#what-are-props-in-react}

   _Props_ là những giá trị đầu vào của components. Chúng là những giá trị đơn lẻ hoặc những object chứa những giá trị truyền vào trong components bằng cách sử dụng cách đặt tên tương tự các thuộc tình của HTML. Chúng là những dữ liệu được truyền từ component cha sang component con.

   Mục đích chính của props trong React là cung cấp chức năng của component như sau:

   1. Truyền dữ liệu cho component.
   2. Kích hoạt thay đổi state.
   3. Có thể sử dụng `this.props.reactProp` bên trong phương thức `render()` của component.

   Ví dụ, hãy tạo một element với thuộc tính `reactProp`:

   ```jsx
   <Element reactProp={'1'} />
   ```

   Thuộc tính `reactProp` này (hoặc bất cứ cái tên nào) sẽ trở thành một thuộc tính gắn với props của component.

   ```
   props.reactProp
   ```

   **[⬆ Mục lục](#table-of-contents)**

10. ### State và Props khác nhau như thế nào? {#what-is-the-difference-between-state-and-props}

    _props_ and _state_ đều là JavaScript objects. Mặc dù cả 2 đều chứa thông tin ảnh hưởng đến đầu ra của hàm render, nhưng chúng khác nhau về chức năng đối với component. Props truyền vào component tương tự như tham số của một hàm trong khi state được quản lý trong component tương tự như các biến được khai báo bên trong hàm.

    **[⬆ Mục lục](#table-of-contents)**

11. ### Tại sao chúng ta không được trực tiếp thay đổi state? {#why-should-we-not-update-the-state-directly}

    Nếu chúng ta trực tiếp thay đổi state thì component sẽ không được render lại.

    ```js
    // Sai
    this.state.message = 'Hello world';
    ```

    Thay vào đó phải sử dụng phương thức `setState()`. Nó sẽ cập nhật state của component. Khi state thay đổi, component sẽ được render lại.

    ```js
    // Đúng
    this.setState({ message: 'Hello World' });
    ```

    **Ghi chú:** Có thể trực tiếp gán giá trị cho state trong _constructor_ (hàm khởi tạo) hoặc sử dụng cú pháp khai báo mới nhất trong class của JavaScript.

    **[⬆ Mục lục](#table-of-contents)**

12. ### Mục đích của hàm callback trong tham số của setState()? {#what-is-the-purpose-of-callback-function-as-an-argument-of-setState}

    Hàm callback trong tham số sẽ chạy sau khi setState kết thúc và component đã được render lại. Trong trường hợp `setState()` là **asynchronous** (bất đồng bộ) hàm callback sẽ dùng cho những hành động sau đó.

    **Ghi chú:** Nên sử dụng các phương thức lifecycle thay vì dùng callback.

    ```js
    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'));
    ```

    **[⬆ Mục lục](#table-of-contents)**

13. ### Cho biết điểm khác biệt giữa việc xử lý sự kiện trong HTML và React {#what-is-the-difference-between-html-and-react-event-handling}

    1. Với HTML, tên sự kiện phải viết _thường_ (_lowercase_):

       ```html
       <button onclick="activateLasers()"></button>
       ```

       Trong khi với React có thể sử dụng _camelCase_:

       ```html
       <button onClick="{activateLasers}"></button>
       ```

    2. Với HTML, có trên trả về `false` để bỏ qua hành động mặc định:

       ```html
       <a href="#" onclick='console.log("The link was clicked."); return false;' />
       ```

       Trong khi với React buộc phải sử dụng `preventDefault()`:

       ```js
       function handleClick(event) {
         event.preventDefault();
         console.log('The link was clicked.');
       }
       ```

    3. Với HTML, cần gọi hàm bằng cách nối thêm `()`
       Trong khi với React không được thêm `()` vào tên hàm. (tham khảo hàm activateLasers ở ví dụ 1)

    **[⬆ Mục lục](#table-of-contents)**

14. ### Làm thế nào để gán phương thức hoặc xử lý sự kiện vào trong JSX callbacks? {#how-to-bind-methods-or-event-handlers-in-jsx-callbacks}

    Có 3 cách như sau:

    1. **Gán trong in Constructor:** Với các class trong JavaScript, các phương thức không được gán mặc định. Tương tự đối với các hàm xử lý sự kiện. Và thường là chúng sẽ được gán trong hàm constructor.

       ```jsx
       class Component extends React.Componenet {
         constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this);
         }

         handleClick() {
           // ...
         }
       }
       ```

    2. **Public class fields syntax:** Nếu bạn không thích sử dụng `bind`, có thể thay bằng _public class fields syntax_.

       ```jsx
       handleClick = () => {
         console.log('this is:', this);
       };
       ```

       ```jsx
       <button onClick={this.handleClick}>{'Click me'}</button>
       ```

    3. **Arrow functions in callbacks:** Có thể trực tiếp sử dụng _arrow functions_.

       ```jsx
       <button onClick={(event) => this.handleClick(event)}>{'Click me'}</button>
       ```

    **Note:** Nếu callback truyền vào qua props từ component cha đến componentcon, components con có thể thực hiện nhiều lần render. Trong trường hợp nsy, để tránh ảnh hướng tới performance, nên sử dụng `.bind()` hoặc _public class fields syntax_.

    **[⬆ Mục lục](#table-of-contents)**

15. ### Có những cách nào để truyền tham số vào hàm xử lý sự kiện hoặc callback? {#how-to-pass-a-parameter-to-an-event-handler-or-callback}

    Có thể sử dụng _arrow function_ đối với _event handler_ và truyền tham số vào:

    ```jsx
    <button onClick={() => this.handleClick(id)} />
    ```

    Tương đương với việc sử dụng `.bind`:

    ```jsx
    <button onClick={this.handleClick.bind(this, id)} />
    ```

    Ngoài 2 cách này, có thể truyền tham số qua hàm được định nghĩa là một array function

    ```jsx
    <button onClick={this.handleClick(id)} />;
    handleClick = (id) => () => {
      console.log('Hello, your ticket number is', id);
    };
    ```

    **[⬆ Mục lục](#table-of-contents)**

16. ### Synthetic events trong ReactJS là gì? {#what-are-synthetic-events-in-react}

    `SyntheticEvent` là object mở rộng hơn của các sự kiện ban đầu của trình duyệt. Bao gồm toàn bộ API của các sự kiện ban đầu của trình duyệt cùng với `stopPropagation()` và `preventDefault()`, ngoại trừ các sự kiện giống nhau trên tất cả các trình duyệt.

    ```js
    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

      return (
        <a href='#' onClick={handleClick}>
          Click me
        </a>
      );
    }
    ```

    Trong ví dụ trên, _e_ là một SyntheticEvent. Mọi SyntheticEvent đều bao gồm những thuộc tính sau:

    ```js
    boolean bubbles
    boolean cancelable
    DOMEventTarget currentTarget
    boolean defaultPrevented
    number eventPhase
    boolean isTrusted
    DOMEvent nativeEvent
    void preventDefault()
    boolean isDefaultPrevented()
    void stopPropagation()
    boolean isPropagationStopped()
    DOMEventTarget target
    number timeStamp
    string type
    ```

    **[⬆ Mục lục](#table-of-contents)**

17. ### Biểu thức điều kiện nội tuyến (inline) là gì? {#what-is-inline-conditional-expressions}

    Cả _câu điều kiện if_ và _toán tử điều kiện_ (toán tử ?) đều có thể sử dụng để làm điều kiện trong hàm render. Ngoài ra, bạn có thể nhúng bất kỳ biểu thức nào vào JSX bằng cách đặt chúng trong dấu ngoặc nhọn và kèm theo sau là toán từ logic `&&`.

    ```jsx
    <h1>Hello!</h1>;
    {
      messages.length > 0 && !isLogin ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You don't have unread messages.</h2>
      );
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

18. ### Từ khóa "key" trong props là gì? và lợi ích của việc sử dụng nó trong mảng? {#what-are-key-props-and-what-is-the-benefit-of-using-them-in-arrays-of-elements}

    `key` là một thuộc tính dạng string đặc biệt chúng ta **nên** thêm vào khi tạo một mảng. _Key_ giúp React xác định phần tử nào được thay đổi, được thêm vào hay bị loại bỏ.

    Chúng ta thưởng sử dụng IDs từ tập dữ liệu để làm _keys_:

    ```jsx
    const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
    ```

    Nếu không có IDs, chúng ta có thể sử dụng _index_ của các phẩn từ trong mảng để làm _key_:

    ```jsx
    const todoItems = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
    ```

    **Ghi chú:**

    1. **Không khuyến khích** sử dụng _indexes_ làm _keys_ nếu thứ tự của các phần tử có thể thay đổi. Điều này sẽ ảnh hướng xấu tới hiệu suất và một số vấn đề với state của component.
    2. Nếu bạn dựng nên một danh sách các component thì hãy dùng _keys_ cho danh sách đó thay vì thẻ `li`.
    3. Sẽ có cảnh báo (warning) ở console nếu `key` trong prop không xuất hiện trong danh sách các phần tử.

    **[⬆ Mục lục](#table-of-contents)**

19. ### Cho biết tác dụng của refs? {#what-is-the-use-of-refs}

    Sử dụng _ref_ sẽ trả về một tham chiếu đến một phần từ, có thể là một phần tử DOM hoặc component React. Chúng ta _nên tránh sử dụng_ trong hầu hết các trường hợp, tuy nhiên, chúng có thể hữu dụng khi bạn cần truy cập trực tiếp đến phần tử DOM hoặc instance của component.

    **[⬆ Mục lục](#table-of-contents)**

20. ### Có những cách nào để tạo ra refs? {#how-to-create-refs}

    Có 2 cách như sau:

    1. Đây là cách mới được thêm gần đây. _Refs_ được tạo ra khi sử dụng phương thức `React.createRef()` và được gắn vào component qua thuộc tính `ref`. Để sử dụng _refs_ bên trong component, chỉ cần gán _ref_ cho một thuộc tính của component trong constructor.

       ```jsx
       class MyComponent extends React.Component {
         constructor(props) {
           super(props);
           this.myRef = React.createRef();
         }
         render() {
           return <div ref={this.myRef} />;
         }
       }
       ```

    2. Bạn có thể sử dụng ref callback với mọi phiên bản React. Ví dụ như:
       ```jsx
       class SearchBar extends Component {
         constructor(props) {
           super(props);
           this.txtSearch = null;
           this.state = { term: '' };
           this.setInputSearchRef = (e) => {
             this.txtSearch = e;
           };
         }
         onInputChange(event) {
           this.setState({ term: this.txtSearch.value });
         }
         render() {
           return <input value={this.state.term} onChange={this.onInputChange.bind(this)} ref={this.setInputSearchRef} />;
         }
       }
       ```

    Bạn có thể sự dụng _refs_ trong hàm của components sử dụng **closures**.
    **Ghi chú:**: Bạn có thể sử dụng ref nội tuyến mặc dù không được khuyên dùng

    **Tham khảo:**
    [Refs in React : All you need to know!](https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81).

    [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html).

    **[⬆ Mục lục](#table-of-contents)**

21. ### Refs forwarding là gì? {#what-are-forward-refs}

    _Ref forwarding_ (chuyển tiếp) là một tính năng cho phép một số component sử dụng _ref_ mà chúng nhận được, và truyền xuống cho component con.

    ```jsx
    const ButtonElement = React.forwardRef((props, ref) => (
      <button ref={ref} className='CustomButton'>
        {props.children}
      </button>
    ));

    // Create ref to the DOM button:
    const ref = React.createRef();
    <ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>;
    ```

    **[⬆ Mục lục](#table-of-contents)**

22. ### Nên dùng callback refs hay finDOMNode()? {#which-is-preferred-option-with-in-callback-refs-and-findDOMNode}

    Nên sử dụng _callback refs_ thay vì `findDOMNode()` API. Vì `findDOMNode()` sẽ ngăn sự cải tiến nhất định của React trong tương lai.

    Cách tiếp cận cũ sử dụng `findDOMNode`:

    ```js
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView();
      }

      render() {
        return <div />;
      }
    }
    ```

    Cách tiếp cận được đề xuất:

    ```js
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.node = createRef();
      }
      componentDidMount() {
        this.node.current.scrollIntoView();
      }

      render() {
        return <div ref={this.node} />;
      }
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

23. ### Tại sao coi string Refs là đồ cổ? {#why-are-string-refs-legacy}

    Nếu bạn đã từng sử dụng React ở các phiên bản trước, bạn có thể biết trước đây thuộc tính `ref` đã được sử dụng với dạng string, như sau `ref={'textInput'}`, và DOM node được truy cập như sau `this.refs.textInput`. Chúng tôi khuyên bạn không nên sử dụng nó vì _string refs tồn tại những vấn đề dưới đây_. String refs đã bị **loại bỏ ở React v16**.

    1. Chúng _buộc React phải liên tục theo dõi component đang thực thi_. Đây là một vấn đề vì nó khiến react module trở thành stateful, do đó gây ra các mỗi lạ mỗi khi react module được sử dụng trùng lặp.
    2. Chúng _không thể ghép lại_ — nếu một thư viện truyền một ref cho một component con, người dùng không thể thêm ref vào component đó nữa. Callback refs hoàn toàn có thể ghép lại.
    3. Chúng _không làm việc với phân tích tĩnh_ như Flow. Flow không thể tìm được string nào xuất hiện trong `this.refs`, cũng như loại của nó. Về mặt này callback refs cũng tốt hơn.
    4. Không làm việc với hấu hều mọi người sử dụng mẫu "render callback" (ví dụ <DataGrid renderRow={this.renderRow} />)

       ```jsx
       class MyComponent extends Component {
         renderRow = (index) => {
           // Cách này không hoạt động. Ref sẽ được gắn vào DataTable thay vì MyComponent:
           return <input ref={'input-' + index} />;

           // Cách này hoạt động!.
           return <input ref={(input) => (this['input-' + index] = input)} />;
         };

         render() {
           return <DataTable data={this.props.data} renderRow={this.renderRow} />;
         }
       }
       ```

       **[⬆ Mục lục](#table-of-contents)**

24. ### Virtual DOM là gì? {#what-is-virtual-dom}

    _Virtual DOM_ (VDOM) một đại diện của _Real DOM_, được lưu trong bộ nhớ và được đồng bộ với "real" DOM. Bước đồng bộ được thực hiện sau khi hàm render thực thi trước khi hiện thị các phần tử hiện thị trên màn hình. Tất cả tiến trình này được gọi là _reconciliation_.

    **[⬆ Mục lục](#table-of-contents)**

25. ### Virtual DOM hoạt động như thế nào? {#how-virtual-dom-works}

    _Virtual DOM_ hoạt động với ba bước đơn giản:

    1. Bất cứ khi nào có sự thay đổi dữ liệu, toàn bộ UI được render lại với Virtual DOM.
       ![vdom](images/vdom1.png)

    2. Sau đó sự khác biệt giữa 2 phiên bản của Virtual DOM - trước và sau dữ liệu thay đổi - được xác định.
       ![vdom2](images/vdom2.png)

    3. Khi đã xác định xong sự khác biệt, real DOM sẽ chỉ cập nhật những phần thực sự thay đổi.
       ![vdom3](images/vdom3.png)

    **[⬆ Mục lục](#table-of-contents)**

26. ### Sự khác biệt giữa Shadow DOM và Virtual DOM là gì? {#what-is-the-difference-between-shadow-dom-and-virtual-dom}

    _Shadow DOM_ là một công nghệ của trình duyệt chủ yếu dành cho các biến và CSS trong _web components_. _Virtual DOM_ là một khái niệm triển khai bởi các thư viện JavaScript dựa trên các APIs của trình duyệt.

    **[⬆ Mục lục](#table-of-contents)**

27. ### React Fiber là gì? {#what-is-react-fiber}

    Fiber là một phương pháp _reconciliation_ mới hay thuật toán lõi được viết lại của React v16. Với mục tiêu là tăng tính phù hợp cho các lĩnh vực animation, layout, gestures, khả năng tạm dừng, hủy bỏ, or sử dụng lại và ưu tiên cho các loại cập nhật khác nhau; and new concurrency primitives.

    **[⬆ Mục lục](#table-of-contents)**

28. ### Mục tiêu chính của của React Fiber là gì? {#what-is-the-main-goal-of-react-fiber}

    Mục tiêu chính của _React Fiber_ là tăng tính phù hợp với animation, layout, và gestures. Tính năng tiêu biểu của nó là **nâng cao khả năng rendering**: khả năng phân chia công việc thành nhiều phần và thành nhiều khung hình.

    **[⬆ Mục lục](#table-of-contents)**

29. ### Controlled component là gì? {#what-are-controlled-components}

    **Controlled component** là component ấy giá trị hiện tại thông qua **props** và thông báo sự thay đổi qua phương thức như là **onChange**. Nó cập nhật và lấy dữ liệu 1 cách liên tục chứ không phải chỉ lấy duy nhất 1 lần.

    Ví dụ:

    ```jsx
    class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({ value: event.target.value });
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type='text' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        );
      }
    }
    ```

    Giá trị của thẻ input sẽ luôn là _this.state.value_. Phương thức _handleChange_ sẽ cập nhật giá trị state mỗi khi form được gửi.

    Việc sử dụng Controlled Component thì mỗi biến state sẽ cần 1 hàm để xử lý cũng như cập nhật thay đổi. Điều này giúp cho việc thực hiện sửa đổi hay xác thực đầu vào 1 cách dễ dàng hơn. Ngoài ra thì các giá trị đầu vào đều có sẵn trong toàn bộ các component của React nên bạn không cần gọi sự kiện kích hoạt hoặc truy cập DOM để lấy giá trị.

    Tìm hiểu thêm:
    [Controlled Component và Uncontrolled Component trong React](https://viblo.asia/p/controlled-component-va-uncontrolled-component-trong-react-L4x5xpnm5BM).

    **[⬆ Mục lục](#table-of-contents)**

30. ### Uncontrolled components là gì? {#what-are-uncontrolled-components}

    **Uncontrolled Components** là những component có các giá trị đầu vào được nạp bằng các truy cập DOM hoặc từ một đối tượng sự kiện. Khá giống với HTML truyền thống.

    Ví dụ dưới đây sử dụng ref để truy cập tới giá trị input _name_:

    ```jsx
    class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type='text' ref={this.input} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        );
      }
    }
    ```

    Trong phần lớn các trường hợp, khuyến khích sử dụng controlled component trong form.

    **[⬆ Mục lục](#table-of-contents)**

31. ### createElement và cloneElement khác nhau như thế nào? {#what-is-the-difference-between-createelement-and-cloneelement}

    Các phần tử JSX sẽ được biên dịch thành hàm `React.createElement()` để tạo ra các phần tử React sẽ được sử dụng để thể hiện các đối tượng UI. Trong khi `cloneElement` được sử dụng để nhân bản một phần tử và truyền vào props mới.

    **[⬆ Mục lục](#table-of-contents)**

32. ### Lifting State Up in React là gì? {#what-is-lifting-state-up-in-react}

    Khi có nhiều component cần chia sẻ sự thay đổi của cùng một dữ liệu thì nên _nâng state cần chia sẻ lên_ tới component cha gần nhất. Nghĩa là nếu 2 component con chia sẻ cùng một dữ liệu từ cha của chúng, thì nên đưa state lên component cha thay vì đặt ở 2 component con.

    **[⬆ Mục lục](#table-of-contents)**

33. ### Các giai đoạn của component lifecycle khác nhau thế nào? {#what-are-the-different-phases-of-component-lifecycle}

    Component lifecycle có 3 giai đoạn riêng biệt như sau:

    1. **Mounting:** Component sẵn sàng để gắn (mount) vào DOM của trình duyệt. Giai đoạn này bao gồm những phương thức: `constructor()`, `getDerivedStateFromProps()`, `render()`, và `componentDidMount()`.

    2. **Updating:** Trong giai đoạn này, component được cập nhật bằng 2 cách, nhận được props mới hoặc cập nhật state từ `setState()` hoặc `forceUpdate()`. Giai đoạn này bao gồm các phương thức: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` và `componentDidUpdate()`.

    3. **Unmounting:** Đây là giai đoạn cuối cùng, component không còn cần thiết và bị gỡ khỏi DOM của trình duyệt. Giai đoạn này gồm các phương thức `componentWillUnmount()`.

    Ngoài ra còn có thể phân chia các giai đoạn theo sự thay đổi DOM. Chúng được phân tách như sau:

    1. **Render** Component sẽ render mà không kèm theo hiệu ứng phụ nào. Áp dụng cho các Pure Component và trong giai đoạn này, React có thể tạm dừng, hủy bỏ hoặc khởi động lại việc render.

    2. **Pre-commit** Trước khi component thực sự áp dụng sự thay đổi vói DOM, có một khoảng thời gian cho phép React có thể đọc từ DOM thông qua phương thức `getSnapshotBeforeUpdate()`.

    3. **Commit** React làm việc với DOM và thực hiện các phương thức lifecycle tương ứng `componentDidMount()` cho gắn (mount), `componentDidUpdate()` cho cập nhật, and `componentWillUnmount()` cho gỡ bỏ (unmount).

    Cách chia giai đoạn từ React 16.3+ ([Phiên bản có tương tác](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

    ![phases 16.3+](images/phases16.3.jpg)

    Cách chia giai đoạn trước React 16.3

    ![phases 16.2](images/phases.png)

    **[⬆ Mục lục](#table-of-contents)**

34. ### Các phương thức lifecycle trong React là gì? {#what-are-the-lifecycle-methods-of-react}

    React 16.3+

    - **getDerivedStateFromProps:** Được gọi ngay trước khi gọi `render()` và được gọi với _mọi_ render. Phương thức này dành cho các trường hợp hiếm gặp, khi bạn cần trích dẫn state. Tham khảo nếu bạn cần [trích dẫn state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** Được thực hiện sau khi render lần đầu tiên và tất cả AJAX requests, DOM hoặc cập nhật state, và thiết lập các sự kiện.
    - **shouldComponentUpdate:** Xác định xem component sẽ được cập nhật hay không. Mặc định trả về `true`. Nếu bạn chắc chắn component không cần render sau khi state hoặc props được cập nhật, bạn có thể trả về giá trị false. Đây là cách rất hiệu quả để cải thiện hiệu suất vì nó cho phép bạn ngăn việc render lại khi component nhận được props mới.
    - **getSnapshotBeforeUpdate:** Chạy ngay trước khi đầu ra của hàm render được gắn vào DOM. Mọi giá trị trả về từ hàm này đều được truyền vào `componentDidUpdate()`. Nó rất hữu dụng để nắm bắt thông tin từ DOM, ví dụ như vị trí của scroll.
    - **componentDidUpdate:** Chủ yếu sử dụng để cập nhật DOM trong khi props hoặc state thay đổi. Không chạy khi `shouldComponentUpdate()` trả về `false`.
    - **componentWillUnmount** Sử dụng để hủy mọi requests, hoặc loại bỏ mọi sự kiện liên kết với component.

    Before 16.3

    - **componentWillMount:** Chạy trước khi render và sử dụng để cấu hình ở mức toàn ứng dụng, trong component gốc.
    - **componentDidMount:** Được thực hiện sau khi render lần đầu tiên và tất cả AJAX requests, DOM hoặc cập nhật state, và thiết lập các sự kiện.
    - **componentWillReceiveProps:** Chạy khi cập nhật prop để kích hoạt thay đổi state.
    - **shouldComponentUpdate:** Xác định xem component sẽ được cập nhật hay không. Mặc định trả về `true`. Nếu bạn chắc chắn component không cần render sau khi state hoặc props được cập nhật, bạn có thể trả về giá trị false. Đây là cách rất hiệu quả để cải thiện hiệu suất vì nó cho phép bạn ngăn việc render lại khi component nhận được props mới.
    - **componentWillUpdate:** Chạy trước khi render lại component khi props và state thay đổi được xác nhận bởi `shouldComponentUpdate()` trả về.
    - **componentDidUpdate:** Chủ yếu sử dụng để cập nhật DOM trong khi props hoặc state thay đổi.
    - **componentWillUnmount:** Sử dụng để hủy mọi requests, hoặc loại bỏ mọi sự kiện liên kết với component.

    **[⬆ Mục lục](#table-of-contents)**

35. ### Higher-Order components là gì? {#what-are-higher-order-components}

    _higher-order component_ (_HOC_) là một hàm nhận tham số là một component và trả về một component mới. Về cơ bản, nó là một mô hình có bản chất từ các thành phần của React.

    Chúng còn gọi là **pure components** bởi vì chungs cho thể chấp nhận bất kỳ component con nào được cung cấp động nhưng chúng sẽ không thể thay đổi hay sao chép bất kỳ hành vi nào từ component làm tham số.

    ```js
    const EnhancedComponent = higherOrderComponent(WrappedComponent);
    ```

    HOC có thể sử dụng trong rất nhiều trường họp:

    1. Tái sử dụng code, logic và khởi tạo trừu tượng.
    2. Render hijacking.
    3. Trừu tượng hóa và điều khiển state.
    4. Điều khiển props.

    **[⬆ Mục lục](#table-of-contents)**

36. ### Làm thế nào để tạo ra props proxy cho HOC component? {#how-to-create-props-proxy-for-hoc-component}

    Chúng ta có thể thêm, sửa props truyền vào component sử dụng mẫu _props proxy_ như sau:

    ```jsx
    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true,
          };

          return <WrappedComponent {...this.props} {...newProps} />;
        }
      };
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

37. ### Context là gì? {#what-is-context}

    _Context_ cung cấp một cách để truyền dữ liệu qua cây component mà không phải truyền props xuống tất cả các code của cây. Lấy ví dụ về việc xác thực người dùng, ưu tiên địa phương, UI theme cần được truy cập trong ứng dụng bởi nhiều components.

    ```js
    const { Provider, Consumer } = React.createContext(defaultValue);
    ```

    **[⬆ Mục lục](#table-of-contents)**

38. ### Children prop là gì? {#what-is-children-prop}

    _Children_ là prop (`this.prop.children`) cho phép chúng ta truyền component dưới dạng dữ liệu cho những component khác, tương tự như props khác. Cây component đặt giữa thẻ mở và đóng của component sẽ được truyền vào component dưới dạng `children` prop.

    Có nhiều phương thức trong React API có thể sử dụng với kiểu prop này. Đó là `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only`, `React.Children.toArray`.
    Dưới đây là một ví dụ đơn giản của children prop,

    ```jsx
    const MyDiv = React.createClass({
      render: function () {
        return <div>{this.props.children}</div>;
      },
    });

    ReactDOM.render(
      <MyDiv>
        <span>{'Hello'}</span>
        <span>{'World'}</span>
      </MyDiv>,
      node
    );
    ```

    **[⬆ Mục lục](#table-of-contents)**

39. ### Viết comments cho React như thế nào? {#how-to-write-comments-in-react}

    Comments trong React/JSX tương tự như trong JavaScript comments nhiều dòng nhưng được đặt trong dấu ngoặc nhọn.

    **Comments một dòng:**

    ```jsx
    <div>
      {/* Comments một dòng (trong JavaScript thuần, comments một dòng are được đặt sau 2 dấu chéo(//)) */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

    **Comments nhiều dòng:**

    ```jsx
    <div>
      {/* Multi-line comments for more than
       one line */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

    **[⬆ Mục lục](#table-of-contents)**

40. ### Mục đích của việc dùng hàm khởi tạo super với tham số props là gì? {#what-is-the-purpose-of-using-super-constructor-with-props-argument}

    Một constructor của class con không thể sử dụng biến `this` nếu phương thức `super()` chưa được gọi. Tương tự đối với các lớp con của ES6. Lý do chính của việc truyền props làm tham số của `super()` là có thể gọi được `this.props` bên trong constructor của component con.

    **Truyền props:**

    ```js
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        console.log(this.props); // { name: 'John', age: 42 }
      }
    }
    ```

    **Không truyền props:**

    ```js
    class MyComponent extends React.Component {
      constructor(props) {
        super();

        console.log(this.props); // undefined

        // nhưng tham số props vẫn có thể sử dụng
        console.log(props); // { name: 'John', age: 42 }
      }

      render() {
        // không có khác biệt ở bên ngoài constructor
        console.log(this.props); // { name: 'John', age: 42 }
      }
    }
    ```

    Đoạn code trên cho thấy `this.props` chỉ là khác biệt bên trong hàm constructor. Còn bên ngoài hàm constructor sẽ như nhau.

    **[⬆ Mục lục](#table-of-contents)**

41. ### Reconciliation là gì? {#what-is-reconciliation}

    Khi props hoặc state của một component thay đổi, React quyết định việc có cần thiết phải cập nhật DOM hay không bằng việc so sánh phần tử trả về với phần tử render trước đó. Khi chúng không bằng nhau (có sự thay đổi), React sẽ cập nhật lại DOM. Quá trình so sánh và cập nhật này được gọi là _reconciliation_.

    **[⬆ Mục lục](#table-of-contents)**

42. ### Làm thế nào để gán giá trị cho state với key động? {#how-to-set-state-with-a-dynamic-key-name}

    Nếu chúng ta sử dụng ES6 hoặc trình biên dịch Babel để chuyển đổi JSX code thì có thể thực hiện việc này với _tên thuộc tính định tính_.

    ```js
    handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

43. ### Sai lầm thường gặp nào khiến hàm được thực thi mỗi khi component được render? {#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders}

    Bạn cần chắc chắn rằng hàm không được gọi khi được truyền vào hàm khác như một tham số.

    ```jsx
    render() {
      // Sai: handleClick được thực thi thay vì được truyền vào như một tham số!
      return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    ```

    Thay vì đó, hãy truyền hàm mà không có đấu ngoặc đơn:

    ```jsx
    render() {
      // Đúng: handleClick được truyền vào như một tham sô!
      return <button onClick={this.handleClick}>{'Click Me'}</button>
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

44. ### Hàm lazy có hỗ trợ named exports hay không? {#is-lazy-function-supports-named-exports}

    Không, hiện tại hàm `React.lazy` chỉ hỗ trợ export mặc định. Nếu bạn muốn import module với named exports, bạn có thể tạo một module trung gian sẽ exports lại module đó dạng mặc định. Nó sẽ đảm bảo mọi thứ vẫn hoạt động và không động vào những components không được sử dụng.
    Lấy ví dự một component với exports nhiều named components,

    ```javascript
    // MoreComponents.js với named exports:
    export const SomeComponent = /* ... */;
    export const UnusedComponent = /* ... */;
    ```

    và export lại `MoreComponents.js` components trong một component trung gian `IntermediateComponent.js`

    ```javascript
    // IntermediateComponent.js
    export { SomeComponent as default } from './MoreComponents.js';
    ```

    Bây giờ bạn có thể import module với hàm lazy như dưới đây,

    ```javascript
    import React, { lazy } from 'react';
    const SomeComponent = lazy(() => import('./IntermediateComponent.js'));
    ```

    **[⬆ Mục lục](#table-of-contents)**

45. ### Vì sao React sử dụng `className` thay cho thuộc tính `class`? {#why-react-uses-classname-over-class-attribute}

    `class` là một từ khóa trong JavaScript, và JSX lại là mở rộng của JavaScript. Đó là lý do chính khiến React sử dụng `className` thay cho `class`. Truyền tham số dạng chuỗi vào prop `className`.

    ```jsx
    render() {
      return <span className={'menu navigation-menu'}>{'Menu'}</span>
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

46. ### Fragments là gì? {#what-are-fragments}

    Một mô hình chung của React được dùng trong component trả về nhiều thành phần. _Fragments_ giúp chúng ta nhóm các thành phần con lại mà không cần thêm DOM.

    ```jsx
    render() {
      return (
        <React.Fragment>
          <ChildA />
          <ChildB />
          <ChildC />
        </React.Fragment>
      )
    }
    ```

    Có một dang _viết_tắt_, nhưng không được hỗ trợ trên nhiều công cụ:

    ```jsx
    render() {
      return (
        <>
          <ChildA />
          <ChildB />
          <ChildC />
        </>
      )
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

47. ### Tại sao Fragments tốt hơn divs? {#why-fragments-are-better-than-container-divs}

    1. Fragments sẽ nhanh hơn một chút và sử dụng ít bộ nhớ hơn vì không cần tạo thêm DOM. Có tác dụng rất lớn đối với những cây DOM càng lớn.
    2. Một số cơ chế CSS như _Flexbox_ và _CSS Grid_ có mối quan hệ đặc biệt giữa phần tử cha-con, và thêm divs vào giữa sẽ rất khó để dựng layout như ý.
    3. Debug dễ hơn với DOM Inspector.

    **[⬆ Mục lục](#table-of-contents)**

48. ### Portals trong React là gì? {#what-are-portals-in-react}

    _Portal_ được khuyên dùng khi render component con vào trong DOM nằm ngoài hệ thống DOM của component cha.

    ```javascript
    ReactDOM.createPortal(child, container);
    ```

    Tham số đầu tiên là phần tử React render được, ví dụ như một component, chuỗi, hoặc fragment. Tham số thứ 2 là phần tử DOM.

    **[⬆ Mục lục](#table-of-contents)**

49. ### Stateless components là gì? {#what-are-stateless-components}

    Nếu một component có hành vi độc lập với state thì nó là một stateless component. Chúng ta có thể sử dụng hàm (function) hoặc lớp (class) để tạo ra một stateless component. Nhưng nếu bạn không cần sử dụng các hàm lifecycle, bạn nên sử dụng hàm. Có rất nhiều lợi ích khi sử dụng hàm như dễ viết, dễ hiểu và kiểm thử , nhanh hơn và bạn sẽ không cần bận tâm đến từ khóa `this`.

    **[⬆ Mục lục](#table-of-contents)**

50. ### Stateful components là gì? {#what-are-stateful-components}

    Nếu hành vi của component phụ thuộc vào _state_ của component đó thì nó được coi là stateful component. Những _stateful components_ này luôn sử dụng _class components_ và có state được khởi tạo trong `constructor`.

    ```javascript
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        // ...
      }
    }
    ```

    **Đối với React 16.8:**
    Hooks sẽ giúp bạn dùng state và các tính năng khác của React mà không cần viết component dạng lớp.

    _Tương đương với Functional Component_

    ```javascript
    import React, {useState} from 'react';

    const App = (props) => {
      const [count, setCount] = useState(0);

      return (
        // JSX
      )
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

51. ### Làm cách nào để áp dụng xác nhận đầu vào cho props? {#how-to-apply-validation-on-props-in-react}

    Khi ứng dụng đang trong giai đoạn phát triển (_development mode_), React sẽ tự động kiểm tra tất cả props chúng ta đưa vào trong components để chắc chắn rằng chúng được truyền vào _đúng kiểu biến_. Nếu kiểu biến không đúng, React sẽ có tạo ra một cảnh bảo (warning) ở console. Việc này bị loại bỏ khi ứng dụng được đưa vào sử dụng (_production mode_) vì ảnh hưởng đến hiệu suất. Những props bắt buộc được định nghĩa với `isRequired`.

    Tập các kiểu props xác định trước:

    1. `PropTypes.number`
    2. `PropTypes.string`
    3. `PropTypes.array`
    4. `PropTypes.object`
    5. `PropTypes.func`
    6. `PropTypes.node`
    7. `PropTypes.element`
    8. `PropTypes.bool`
    9. `PropTypes.symbol`
    10. `PropTypes.any`

    Ví dụ dưới định nghĩa `propTypes` cho `User` component:

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';

    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      };

      render() {
        return (
          <>
            <h1>{`Welcome, ${this.props.name}`}</h1>
            <h2>{`Age, ${this.props.age}`}</h2>
          </>
        );
      }
    }
    ```

    **Ghi chú:** Từ React v15.5 _PropTypes_ được chuyển từ `React.PropTypes` sang `prop-types`.

    **[⬆ Mục lục](#table-of-contents)**

52. ### React có những lợi thế nào? {#what-are-the-advantages-of-react}

    1. Tăng hiệu năng ứng dụng với việc sử dụng _Virtual DOM_.
    2. Code dễ đọc và viết hơn với JSX.
    3. Có thể renders ở cả client và server (_SSR_).
    4. Dễ dang tích hợp với các framework khác (Angular, Backbone) khi chỉ là một thư viện.
    5. Dễ dàng viết unit và integration tests với nhiều tool như Jest.

    **[⬆ Mục lục](#table-of-contents)**

53. ### React có những hạn chế nào? {#what-are-the-limitations-of-react}

    1. React chỉ là một thư viện tầng view, không phải một framework đầy đủ.
    2. Cần một quá trình học hỏi cho những người mới bắt đầu với phát triển web.
    3. Tích hợp React vào một framework MVC truyền thống cần đòi hỏi thêm một số cấu hình khác.
    4. Tăng độ phức tạp của code với khuôn mẫu nội tuyến (inline templating) và JSX.
    5. Quá nhiều component nhỏ có thể làm phức tạp hóa vấn đề không cần thiết (over engineering).

    **[⬆ Mục lục](#table-of-contents)**

54. ### Error boundaries trong React v16 là gì? {#what-are-error-boundaries-in-react-v16}

    _Error boundaries_ là component trong React giúp bắt các lỗi JavaScript trong các component con của nó, ghi lại những lỗi đó, và hiển thị UI dự phòng, ứng dụng vẫn hoạt động bình thường, không bị dừng vì lỗi.

    Một class component trở thành một error boundary nếu chúng định nghĩa một phương thức lifecycle mới gọi là `componentDidCatch(error, info)` hoặc `static getDerivedStateFromError()`:

    ```jsx
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
      }

      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>{'Something went wrong.'}</h1>;
        }
        return this.props.children;
      }
    }
    ```

    Sau đó sử dụng chúng như một component bình thường:

    ```jsx
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
    ```

    **[⬆ Mục lục](#table-of-contents)**

55. ### Error boundaries ở React v15 hoạt động như thế nào? {#how-error-boundaries-handled-in-react-v15}

    React v15 hỗ trợ rất cơ bản cho _error boundaries_ khi sử dụng phương thức `unstable_handleError`. Phương thức này đã được đổi tên thành `componentDidCatch` trong React v16.

    **[⬆ Mục lục](#table-of-contents)**

56. ### Cách nào được khuyên dùng đề kiểm tra kiểu dữ liệu tĩnh? {#what-are-the-recommended-ways-for-static-type-checking}

    Thông thường chúng ta sử dụng thư viện _PropTypes_ (`React.PropTypes` được chuyển thành `prop-types` từ React v15.5) cho việc _kiểm tra kiểu dữ liệu_ trong ứng dụng React. Với một tập mã nguồn lớn, nên sử dụng _kiểm tra kiểu dữ liệu tĩnh_ như Flow hoặc TypeScript, việc kiểm tra sẽ được thực hiện tại thời điểm biên dịch và cung cấp các tính năng auto-completion.

    **[⬆ Mục lục](#table-of-contents)**

57. ### Thư viện `react-dom` cung cấp những phương thức nào? {#what-is-the-use-of-react-dom-package}

    Thư viện `react-dom` chung cấp những _phương thức riêng cho DOM_ được sử dụng ở cấp cao nhất trong ứng dụng của bạn. Hầu hết các component không yêu cầu sử dụng module này. Một vài phương thức của thư viện này là:

    1. `render()`
    2. `hydrate()`
    3. `unmountComponentAtNode()`
    4. `findDOMNode()`
    5. `createPortal()`

    **[⬆ Mục lục](#table-of-contents)**

58. ### Mục đích của phương thức render trong `react-dom` là gì? {#what-is-the-purpose-of-render-method-of-react-dom}

    Phương thức này dùng để render một phần tử React vào trong DOM trong contaner được cung cấp và trả về một tham chiếu tới component đó. Nếu phần tử React đó đã được render trước đó trong container, nó sẽ thực hiện cập nhật và chỉ thay đổi DOM khi cần cập nhật những thay đổi mới nhất.

    ```
    ReactDOM.render(element, container[, callback])
    ```

    Nếu cung cấp callback, hàm này sẽ được thực thi sau khi component được render hoặc cập nhật.

    **[⬆ Mục lục](#table-of-contents)**

59. ### ReactDOMServer là gì? {#what-is-reactdomserver}

    `ReactDOMServer` là một object cho phép bạn render component thành dạng văn bản tĩnh (thường được sử dụng trên node server). Object này chủ yếu được sử dụng trong _server-side rendering_ (SSR). Những phương thức duwois có thể sử dụng ở cả môi trường server và trình duyệt:

    1. `renderToString()`
    2. `renderToStaticMarkup()`

    Lấy ví dụ, bạn tạo một ứng dụng web server với NodeJS như Express, Hapi, hoặc Koa, và bạn gọi phương thức `renderToString` để render ứng dụng của bạn thành dạng chuỗi, sau đó sẽ được trả về cho trình duyệt.

    ```javascript
    // using Express
    import { renderToString } from 'react-dom/server';
    import MyPage from './MyPage';

    app.get('/', (req, res) => {
      res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>');
      res.write('<div id="content">');
      res.write(renderToString(<MyPage />));
      res.write('</div></body></html>');
      res.end();
    });
    ```

    **[⬆ Mục lục](#table-of-contents)**

60. ### Sử dụng innerHTML trong React như thế nào? {#how-to-use-innerhtml-in-react}

    Thuộc tính `dangerouslySetInnerHTML` trong React là sự thay thế cho việc sử dụng `innerHTML` trong DOM của trình duyệt. Cũng giống như `innerHTML`, nhưng sử dụng thuộc tính này khá rủi ro vì có thể gặp phải tấn công XSS (considering cross-site). Bạn chỉ nên truyền vào một object với `__html` là key và văn bản HTML là giá trị.

    Trong ví dụ này, component MyComponent sử dụng thuộc tính `dangerouslySetInnerHTML` để truyền văn bản HTML vào:

    ```jsx
    function createMarkup() {
      return { __html: 'First &middot; Second' };
    }

    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />;
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

61. ### Đưa styles vào trong React như thế nào? {#how-to-use-styles-in-react}

    Thuộc tính `style` chấp nhận một object JavaScript với tính chất camelCased thay vì một chuỗi CSS. Việc này phù hợp với thuộc tính Javascript kiểu DOM, hiệu quả hơn, và ngăn chặn lỗ hổng bảo mật XSS.

    ```jsx
    const divStyle = {
      color: 'blue',
      backgroundImage: 'url(' + imgUrl + ')',
    };

    function HelloWorldComponent() {
      return <div style={divStyle}>Hello World!</div>;
    }
    ```

    Key của object Style có dạng camelCased để phù hợp với việc truy cập các thuộc tính trong DOM của JavaScript (Ví dụ. `node.style.backgroundImage`).

    **[⬆ Mục lục](#table-of-contents)**

62. ### Xử lý sự kiện trong React có sự khác biệt nào? {#how-events-are-different-in-react}

    Xử lý những sự kiện với các phẩn tử trong React có một số khác biệt về cú pháp:

    1. Hàm xử lý sự kiện trong React được đặt tên theo camelCase, thay vì lowercase.
    2. Với JSX truyền vào một hàm như xử lý sự kiện, thay vì một chuỗi.

    **[⬆ Mục lục](#table-of-contents)**

63. ### Điều gì xảy ra khi dùng `setState()` bên trong constructor? {#what-will-happen-if-you-use-setstate-in-constructor}

    Khi sử dụng `setState()`, ngoài việc gán state cho component, React còn render lại component đó và toàn bộ component con. Do đó sẽ gặp phải lỗi: _Can only update a mounted or mounting component_. Do đó chúng ta chỉ nên sử dụng `this.state` để khởi tạo các giá trị state bên trong constructor.

    **[⬆ Mục lục](#table-of-contents)**

64. ### Tác dụng của số thứ tự (keys) là gì? {#what-is-the-impact-of-indexes-as-keys}

    Keys cần phải ổn định, dự đoán được và duy nhất để React có thể theo dõi được các thành phần.

    Trong đoạn mã dưới đây, key của mỗi phần từ dựa trên số thứ tự của mảng, thay vì gắn với dữ liệu được trình bày. Điều này giới hạn việc tối ưu hóa mà React có thể làm.

    ```jsx
    {
      todos.map((todo, index) => <Todo {...todo} key={index} />);
    }
    ```

    Nếu sử dụng thuộc tính của dữ liệu làm key duy nhất, ví dụ như todo.id là duy nhất trong mảng và có tính ổn định, React có thể sắp xếp lại các thành phần mà không cần phải đánh giá lại chúng quá nhiều.

    ```jsx
    {
      todos.map((todo) => <Todo {...todo} key={todo.id} />);
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

65. ### Có thể sử dụng `setState()` trong `componentWillMount()` được không? {#is-it-good-to-use-setstate-in-componentwillmount-method}

    Nên tránh khởi tạo phương thức async trong phương thức lifecycle `componentWillMount()`. `componentWillMount()` sẽ được gọi ngay trước khi mount xảy ra. Nó được gọi trước khi `render()`, do đó việc thiết lập state trong phương thức này sẽ không kích hoạt re-render. Tránh đưa vào bất kỳ hiệu ứng phụ hoặc bất đồng bộ nào trong phương thức này. Cần chắc chắn rằng mọi hàm async được gọi trong component đều nằm trong `componentDidMount()` thay vì `componentWillMount()`.

    ```jsx
    componentDidMount() {
      axios.get(`api/todos`)
        .then((result) => {
          this.setState({
            messages: [...result.data]
          })
        })
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

66. ### Nếu sử dụng props khi khởi tạo state thì chuyện gì sẽ xảy ra? {#what-will-happen-if-you-use-props-in-initial-state}

    Nếu props của component được thay đổi mà component không được render lại, thì giá trị prop mới của prop sẽ không được hiển thị vì hàm constructor sẽ không cập nhật state hiện tại của component. Giá trị khởi tạo của state từ props chỉ chạy khi component được tạo lần đầu tiên.

    Component dưới đây sẽ không hiển thị giá trị prop được cập nhật:

    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          records: [],
          inputValue: this.props.inputValue,
        };
      }

      render() {
        return <div>{this.state.inputValue}</div>;
      }
    }
    ```

    Sử dụng props bên trong phương thức render để cập nhật được giá trị:

    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          record: [],
        };
      }

      render() {
        return <div>{this.props.inputValue}</div>;
      }
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

67. ### Làm thế nào để render có điều kiện component? {#how-do-you-conditionally-render-components}

    Trong một số trường hợp bạn muốn render component tùy theo giá trị của state. JSX không render giá trị `false` hoặc `undefined`, nên bạn có thể sử dụng phép toán _điều kiện rút gọn_ để render một phần nhất định của component khi điều kiện đúng.

    ```jsx
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address && <p>{address}</p>}
      </div>
    );
    ```

    Nếu cần sử dụng điều kiện `if-else` có thể dùng _phép toán ba ngôi_.

    ```jsx
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address ? <p>{address}</p> : <p>{'Address is not available'}</p>}
      </div>
    );
    ```

    **[⬆ Mục lục](#table-of-contents)**

68. ### Tại sao chúng ta phải cẩn thận khi sử dụng spreading với props trong DOM??? {#why-we-need-to-be-careful-when-spreading-props-on-dom-elements}

    Khi dùng spread operator với props chúng ta sẽ gặp rủi ro khi thêm vào những thuộc tính HTML không xác định, một cách làm không tốt. Thay vào đó, chúng ta nên sử dụng tính năng phá hủy prop với toán tử `...rest`, nó sẽ chỉ thêm các props cần thiết. Ví dụ,

    ```jsx
    const ComponentA = () => <ComponentB isDisplay={true} className={'componentStyle'} />;

    const ComponentB = ({ isDisplay, ...domProps }) => <div {...domProps}>{'ComponentB'}</div>;
    ```

    **[⬆ Mục lục](#table-of-contents)**

69. ### Làm thế nào decorators trong React? {#how-you-use-decorators-in-react}

    Bạn có thể _decorate_ được _class_ components, tương tự như việc truyền component vào trong hàm. **Decorators** là một cách linh hoạt và dễ đọc để sửa đổi chức năng một component.

    ```jsx
    @setTitle('Profile')
    class Profile extends React.Component {
      //....
    }

    /*
      title là một chuỗi sẽ được đặt làm tiêu đề tài liệu
      WrappedComponent là những decorator sẽ nhận được khi đặt trực tiếp component trên
      vào ví dự dưới đây 
    */
    const setTitle = (title) => (WrappedComponent) => {
      return class extends React.Component {
        componentDidMount() {
          document.title = title;
        }

        render() {
          return <WrappedComponent {...this.props} />;
        }
      };
    };
    ```

    **Ghi chú:** Decorators không có trong ES7, nhưng đang được _đề xuất giai đoạn 2_.

    **[⬆ Mục lục](#table-of-contents)**

70. ### Làm thế nào để ghi nhớ một component? {#how-do-you-memoize-a-component}

    Có một số thư viện có sẵn có thể sử dụng với components dạng hàm. Ví dụ như thư viện `moize` có thể ghi nhớ một component trong một component khác.

    ```jsx
    import moize from 'moize';
    import Component from './components/Component'; // module này trích xuất một component không-ghi nhớ

    const MemoizedFoo = moize.react(Component);

    const Consumer = () => {
      <div>
        {'I will memoize the following entry:'}
        <MemoizedFoo />
      </div>;
    };
    ```

    **[⬆ Mục lục](#table-of-contents)**

71. ### Triển khai SSR như thế nào? {#how-you-implement-server-side-rendering-or-ssr}

    React đã được trang bị để xử lý render trên một máy chủ Node. Tạo ra một phiên bản kết xuất sẵn DOM, theo mô hình tương tự như ở trên máy khách.

    ```jsx
    import ReactDOMServer from 'react-dom/server';
    import App from './App';

    ReactDOMServer.renderToString(<App />);
    ```

    Phương thức này sẽ tạo ra một chuỗi HTML thông thường, sau đó đặt bên trong thân trang như một phản hồi của máy chủ. Về phía client, React nhận biết nội dung được kết xuất và tiếp tục thực hiện.

    **[⬆ Mục lục](#table-of-contents)**

72. ### Chuyển sang chế độ sản phẩm như thế nào? {#how-to-enable-production-mode-in-react}

    Sử dụng phương thức `DefinePlugin` của Webpack và gán giá trị `production` cho `NODE_ENV`, bằng cách này sẽ loại bỏ xác thực propType, cảnh báo và một số thứ khác. Ngoài ra, nếu bạn tối giản code, ví dụ, loại bỏ mã chết của Uglify để loại bỏ comment và mã đang phát triển, sẽ làm giảm đáng kể kích thước dự án của bạn.

    **[⬆ Mục lục](#table-of-contents)**

73. ### CRA là gì và nó có những lợi ích nào? {#what-is-cra-and-its-benefits}

    CRA `create-react-app` là công cụ thao tác dòng lện (CLI) cho phép bạn nhanh chóng tạo và chạy một ứng dụng React mà không cần phải cấu hình quá nhiều bước.

    Các bước tạo dựng một ứng dụng đơn giản bằng _CRA_ rất đơn giản:

    ```console
    # Cài đặt
    $ npm install -g create-react-app

    # Tạo dự án mới
    $ create-react-app todo-app
    $ cd todo-app

    # Dựng, test và chạy
    $ npm run build
    $ npm run test
    $ npm start
    ```

    Nó bao gồm mọi thứ chúng ta cần để xây dựng một ứng dụng React:

    1. Hỗ trợ cú pháp React, JSX, ES6, và Flow.
    2. Ngôn ngữ bổ sung ngoài ES6 như toán tử spread.
    3. Tự động bổ sung tiền tố cho CSS, bạn không cần thêm -webkit- hoặc một số tiền tố khác.
    4. Chạy unit test nhanh cùng với báo cáo độ phủ test được dựng sẵn.
    5. Môi trường phát triển tiện lợi, cảnh báo nhiều lỗi phổ biến.
    6. Tập lệnh dựng sẵn để đóng gói JS, CSS, và hình ảnh cho sản phẩm, cùng với các giá trị băm (hashs) và sourcemaps.

    **[⬆ Mục lục](#table-of-contents)**

74. ### Thứ tự của các _phương thức vòng đời_ của React ở gian đoạn mouting là gì? {#what-is-the-lifecycle-methods-order-in-mounting}

    Trong quá trình mounting, một component được tạo ra và chèn vào trong DOM, các phương thức vòng đời trong giai đoạn này được gọi theo thứ tự sau:

    1. `constructor()`
    2. `static getDerivedStateFromProps()`
    3. `render()`
    4. `componentDidMount()`

    **[⬆ Mục lục](#table-of-contents)**

75. ### Phương thức vòng đời nào sẽ bị loại bỏ ở React v16? {#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16}

    Các phương thức dòng đời dưới đây thực hiện những đoạn mã không an toàn và sẽ gặp nhiều vấn đề với kết xuất không đồng bộ (async rendering).

    1. `componentWillMount()`
    2. `componentWillReceiveProps()`
    3. `componentWillUpdate()`

    Bắt đầu từ React v16.3, những phương thức này được đánh dấu với tiền tố `UNSAFE_`, và sẽ bị loại bỏ ở React v17.

    **[⬆ Mục lục](#table-of-contents)**

76. ### Mục đích của phương thức vòng đời `getDerivedStateFromProps()` là gì? {#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method}

    Phương thức vòng đời mới `getDerivedStateFromProps()` là một phương thức tĩnh được gọi sau khi một component được khởi tạo cũng như trước khi component được kết xuất lại. Nó sẽ trả về một đối tượng để cập nhật state, hoặc giá trị `null` nếu props mới không có cập nhật nào.

    ```javascript
    class MyComponent extends React.Component {
      static getDerivedStateFromProps(props, state) {
        // ...
      }
    }
    ```

    Phương thức này cùng với `componentDidUpdate()` sẽ thay thế cho `componentWillReceiveProps()`.

    **[⬆ Mục lục](#table-of-contents)**

77. ### Mục đích của phương thức vòng đời `getSnapshotBeforeUpdate()` là gì? {#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method}

    `getSnapshotBeforeUpdate()` là phương thức vòng đời mới được gọi ngay trước khi DOM được cập nhật. Giá trị trả về của phương thức này sẽ được truyền vào tham số thứ 3 của phương thức `componentDidUpdate()`.

    ```javascript
    class MyComponent extends React.Component {
      getSnapshotBeforeUpdate(prevProps, prevState) {
        // ...
      }
    }
    ```

    Phương thức này cùng với `componentDidUpdate()` sẽ thay thế cho `componentWillUpdate()`.

    **[⬆ Mục lục](#table-of-contents)**

78. ### Hooks sẽ thay thế cho kết xuất props hay Higher-Order Components? {#do-hooks-replace-render-props-and-higher-order-components}

    Kết xuất props và higher-order components chỉ kết xuất duy nhật một component con nhưng trong phần lớn các trường hợp, Hooks là một cách đơn giản hơn cho việc kết xuất nhờ vào việc đơn giản hóa cây DOM.

    **[⬆ Mục lục](#table-of-contents)**

79. ### Nên đặt tên cho các component như thế nào? {#what-is-the-recommended-way-for-naming-components}

    Nên đặt tên cho component theo tham chiếu thay vì sử dụng thuộc tính `displayName`.

    Sử dụng `displayName` để đặt tên cho component:

    ```javascript
    export default React.createClass({
      displayName: 'TodoApp',
      // ...
    });
    ```

    Nên sử dụng cách sau:

    ```javascript
    export default class TodoApp extends React.Component {
      // ...
    }
    ```

    **[⬆ Mục lục](#table-of-contents)**

80. ### Thứ tự các phương thức trong một component nên sắp xếp như thế nào? {#what-is-the-recommended-ordering-of-methods-in-component-class}

    _Khuyến nghị_ sắp xếp các phương thức theo thứ tự từ giai đoạn _mounting_ đến giai đoạn _kết xuất_:

    1. các phương thức `static`
    2. `constructor()`
    3. `getChildContext()`
    4. `componentWillMount()`
    5. `componentDidMount()`
    6. `componentWillReceiveProps()`
    7. `shouldComponentUpdate()`
    8. `componentWillUpdate()`
    9. `componentDidUpdate()`
    10. `componentWillUnmount()`
    11. các phương thức xử lý sự kiện `onClick()`, `onClickSubmit()` hoặc `onChangeDescription()`
    12. các phương thức getter cho kết xuất như `getSelectReason()` hoặc `getFooterContent()`
    13. các phương thức kết xuất không bắt buộc như `renderNavigation()` hoặc `renderProfilePicture()`
    14. `render()`

    **[⬆ Mục lục](#table-of-contents)**

81. ### Component chuyển đổi là gì? {#what-is-a-switching-component}

    Một _component chuyển đổi_ là một component kết xuất một trong nhiều component tùy điều kiện. Chúng ta cần sử dụng đối tượng để xác định component được kết xuất.

    Ví dụ, một component chuyển đổi dùng để hiển thị những trang khác nhau dựa theo giá trị `page` trong prop:

    ```jsx
    import HomePage from './HomePage';
    import AboutPage from './AboutPage';
    import ServicesPage from './ServicesPage';
    import ContactPage from './ContactPage';

    const PAGES = {
      home: HomePage,
      about: AboutPage,
      services: ServicesPage,
      contact: ContactPage,
    };

    const Page = (props) => {
      const Handler = PAGES[props.page] || ContactPage;

      return <Handler {...props} />;
    };

    // Các keys của đối tượng PAGES có thể sử dụng trong prop types để bắt lỗi trong lúc phát triển.
    Page.propTypes = {
      page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
    };
    ```

    **[⬆ Mục lục](#table-of-contents)**

82. ### Tại sao lại cần truyền hàm vào trong hàm `setState()`? {#why-we-need-to-pass-a-function-to-setstate}

    Lý do là vì `setState()` hoạt động theo cơ chế bất đồng bộ. React thay đổi state hàng loạt vì lý do hiệu suất, vậy nên giá trị trong state có thể không thay đổi ngay sau khi `setState()` được gọi. Điều đó có nghĩa rằng bạn không nên dựa vào giá trị hiện tại của state khi thực hiện gọi `setState()` vì bạn không thể chắc chắn giá trị tại thời điểm đó là gì. Giải pháp đưa ra là truyền vào `setState()` một hàm, với một tham số là giá trị cũ của state. Bằng cách này, bạn có thể tránh được các vấn đề với người dùng khi nhận được giá trị cũ của state do tính bất đồng bộ của `setState()`.

    Giả sử giá trị `count` ban đầu là 0. Sau 3 thao tác tăng liên tiếp, nhưng giá trị chỉ tăng lên 1.

    ```javascript
    // giả định this.state.count === 0
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    // nhưng this.state.count === 1, không phải 3
    ```

    Nếu chúng ta truyền một hàm vào `setState()`, giá trị count được tính toán chính xác.

    ```javascript
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment,
    }));
    // this.state.count === 3 như mong đợi
    ```

    **[⬆ Mục lục](#table-of-contents)**

83. ### `strict mode` trong React là gì? {#what-is-strict-mode-in-react}

    `React.StrictMode` là một component hữu ích để làm nổi bật các vấn đề tiềm ẩn của một ứng dụng. Giống như `<Fragment>`, `<StrictMode>` không kết xuất thêm phần tử DOM bổ sung nào. Nó sẽ kích hoạt kiểm trả bổ sung và cảnh báo cho những phần tử con. Các kiểm tra này chỉ áp dụng khi ở _chế độ phát triển_.

    ```jsx
    import React from 'react';

    function ExampleApplication() {
      return (
        <div>
          <Header />
          <React.StrictMode>
            <div>
              <ComponentOne />
              <ComponentTwo />
            </div>
          </React.StrictMode>
          <Footer />
        </div>
      );
    }
    ```

    Ở ví dụ trên, _strict mode_ chỉ áp dụng cho `<ComponentOne>` và `<ComponentTwo>` components.

    **[⬆ Mục lục](#table-of-contents)**

84. ### React mixins là gì? {#what-are-react-mixins}

    _Mixins_ là một cách để tách biệt hoàn toàn các components có một chức năng chung. **Không nên được sử dụng** mixins và có thể thay thế bởi _higher-order components_ hoặc _decorators_.

    Một trong những mixins phổ biến nhất là `PureRenderMixin`. Bạn có thể sử dụng chúng trong một số component để ngăn việc tái kết xuất không cần thiết khi props và state không đổi so với props và state trước đó (so sánh nông):

    ```javascript
    const PureRenderMixin = require('react-addons-pure-render-mixin');

    const Button = React.createClass({
      mixins: [PureRenderMixin],
      // ...
    });
    ```

    <!-- TODO: mixins đã bị loại bỏ -->

    **[⬆ Mục lục](#table-of-contents)**

85. ### Tại sao `isMounted()` là một cách tiếp cận tồi và giải pháp thích hợp là gì? {#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution}

    Mục đích chính khi sử dụng `isMounted()` là tránh gọi `setState()` sau khi một component bị loại (việc này sẽ xuất hiện một cảnh báo).

    ```javascript
    if (this.isMounted()) {
      this.setState({...})
    }
    ```

    Kiểm tra `isMounted()` trước khi gọi `setState()` không loại bỏ cảnh báo, nhưng nó cũng làm mất đi mục đích của việc cảnh báo. Sử dụng `isMounted()` khiến code có mùi vì lý do duy nhất để kiểm tra là vì chúng ta nghĩ rằng chúng ta có thể đang tiếp tục sử dụng một component khi đã được loại khỏi DOM.

    Một giải pháp tối ưu hơn là tìm những nơi `setState()` có thể được gọi sau khi component bị loại, và sửa chúng. Những tình huống này xảy ra chủ yếu do việc callback, khi một component đang đợi một số dữ liệu và bị loại trước khi nhận được data. Cách lý tưởng nhất là tất cả các callback đều bị hủy trong phương thức `componentWillUnmount()`, trước khi bị loại.

    **[⬆ Mục lục](#table-of-contents)**

86. ### Pointer Events hỗ trợ trong React là gì? {#what-are-the-pointer-events-supported-in-react}

    _Pointer Events_ cung cấp một cách thống nhất để xử lý sự kiện đầu vào. Trước kia, chúng ta chỉ có những sự kiện của con trỏ chuột nhưng giờ đây có rất nhiều sự kiện của thiết bị khác không liên quan đến con chuột, ví dụ như smart phone với touch hoặc pen. Chúng ta cần lưu ý rằng những sự kiện này sẽ chỉ hoạt động trong các trình duyệt hỗ trợ đặc tả _Pointer Events_.

    Những sự kiện dưới đây đang có sẵn trong _React DOM_:

    1. `onPointerDown`
    2. `onPointerMove`
    3. `onPointerUp`
    4. `onPointerCancel`
    5. `onGotPointerCapture`
    6. `onLostPointerCaptur`
    7. `onPointerEnter`
    8. `onPointerLeave`
    9. `onPointerOver`
    10. `onPointerOut`

    **[⬆ Mục lục](#table-of-contents)**

87. ### Tại sao tên của component nên bắt đầu bằng chữ cái in hoa? {#why-should-component-names-start-with-capital-letter}

    Nếu bạn kết xuất component với JSX, tên của component phải bắt đầu bằng chữ in hoa nếu không React sẽ thông báo một lỗi không công nhận tên tag. Vì theo quy ước chỉ có các thẻ thuộc tính trong HTML và thẻ SVG có thể bắt đầu với chữ cái thường.

    ```jsx
    class SomeComponent extends Component {
      // Code goes here
    }
    ```

    Bạn có thể định nghĩa component dạng class với tên bắt đầu bằng chữ cái thường, nhưng khi import thì phải dùng chữ cái in hoa. Xem xét ví dụ dưới đây:

    ```jsx
    class myComponent extends Component {
      render() {
        return <div />;
      }
    }

    export default myComponent;
    ```

    Khi được import vào một component khác, chúng cần phải được bắt đầu bằng chữ in hoa:

    ```jsx
    import MyComponent from './MyComponent';
    ```

    **[⬆ Mục lục](#table-of-contents)**

88. ### Các thuộc tính tùy biến trong DOM có được hỗ trợ ở React v16 không? {#are-custom-dom-attributes-supported-in-react-v16}

    Có. Trước đây, React đã từng bỏ qua những thuộc tính DOM không được định nghĩa. Nếu bạn viết một thuộc tính trong JSX mà React không nhận ra, React sẽ bỏ qua. Xét ví dụ dưới đây:

    ```jsx
    <div mycustomattribute={'something'} />
    ```

    Sẽ hiển thị một thẻ div trống trong DOM với React v15:

    ```html
    <div />
    ```

    Với React v16 mọi thuộc tính không xác định đều được hiển thị trong DOM:

    ```html
    <div mycustomattribute="something" />
    ```

    Điều này rất hữu ích để cung cấp các thuộc tính không chuẩn dành riêng cho trình duyệt, thử nghiệm DOM APIs mới, và tích hợp với các thư viện của bên thứ 3.

    **[⬆ Mục lục](#table-of-contents)**

89. ### Nêu những điểm khác nhau giữa constructor và getInitialState? {#what-is-the-difference-between-constructor-and-getinitialstate}

    Bạn có thể khởi tạo giá trị của state trong constructor khi sử sụng class trong ES6, và phương thức `getInitialState()` khi sử dụng `React.createClass()`.

    Đối với class trong ES6:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          /* giá trị khởi tạo của state */
        };
      }
    }
    ```

    Sử dụng `React.createClass()`:

    ```javascript
    const MyComponent = React.createClass({
      getInitialState() {
        return {
          /* giá trị khởi tạo của state */
        };
      },
    });
    ```

    **Ghi chú:** `React.createClass()` không còn được sử dụng và đã được loại bỏ ở React v16. Được thay thế bởi class trong ES6.

    **[⬆ Mục lục](#table-of-contents)**

90. ### Có thể tái kết xuất một component mà không cần gọi hàm setState? {#can-you-force-a-component-to-re-render-without-calling-setstate}

    Bình thường, khi state hoặc props của component phát sinh thay đổi, component đó sẽ thực hiện tái kết xuất. Nếu phương thức `render()` của component phụ thuộc vào một sỗ dữ liệu khác, chúng ta có thể yêu cầu React tái kết xuất component bằng cách gọi phương thức `forceUpdate()`.

    ```javascript
    component.forceUpdate(callback);
    ```

    Khuyến cáo nên tránh sử dụng `forceUpdate()` và chỉ đọc dữ liệu từ `this.props` và `this.state` trong phương thức `render()`.

    **[⬆ Mục lục](#table-of-contents)**

91. ### Khi sử dụng class trong ES6, việc khai báo `super()` và `super(props)` có gì khác nhau? {#what-is-the-difference-between-super-and-super-props-in-react-using-es6-classes}

    Khi muốn sử dụng `this.props` trong `constructor()`, chúng ta cần truyền props vào phương thức `super()`.

    Sử dụng `super(props)`:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        console.log(this.props); // { name: 'John', ... }
      }
    }
    ```

    Sử dụng `super()`:

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super();
        console.log(this.props); // undefined
      }
    }
    ```

    Bên ngoài `constructor()`, cả 2 sẽ hiển thị `this.props` như nhau.

    **[⬆ Mục lục](#table-of-contents)**

92. ### Thực hiện lặp trong JSX như thế nào? {#how-to-loop-inside-jsx}

    Bạn có thể sử dụng `Array.prototype.map` với cú pháp _hàm arrow_ trong ES6. Ví dụ, một mảng `items`chứa các đối tượng được `map` thành một mảng các component:

    ```jsx
    <tbody>
      {items.map((item) => (
        <SomeComponent key={item.id} name={item.name} />
      ))}
    </tbody>
    ```

    Bạn không thể sử dụng vòng lặp `for`:

    ```jsx
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    ```

    Bởi vì các thẻ JSX được biên dịch thành dạng _function_, và bạn không thể sử dụng các câu lệnh bên trong các biểu thức. Điều này có thể thay đổi nhờ các biểu thức `do` là _stage 1 proposal_.

    **[⬆ Mục lục](#table-of-contents)**

93. ### Đưa giá trị props vào giá trị của thuộc tính html như thế nào? {#how-do-you-access-props-in-attribute-quotes}

    React (hoặc JSX) không hỗ trợ đưa giá trị trong props vào giá trị của thuộc tính theo cách dưới:

    ```jsx
    <img className='image' src='images/{this.props.image}' />
    ```

    Nhưng bạn có thể đặt bất kỳ biểu thức nào bên trong dấu ngoặc nhọn để làm giá trị thuộc tính. Ví dụ như biểu thức dưới đây:

    ```jsx
    <img className='image' src={'images/' + this.props.image} />
    ```

    Một cách khác là sử dụng _template strings_:

    ```jsx
    <img className='image' src={`images/${this.props.image}`} />
    ```

    **[⬆ Mục lục](#table-of-contents)**

94. ### Sử dụng proptype như thế nào với props là mảng có cấu trúc? {#what-is-React-proptype-array-with-shape}

    Để truyền một mảng các cấu trúc xác định vào một component, `React.PropTypes.shape()` sẽ thực hiện việc này khi đặt trong `React.PropTypes.arrayOf()`. Xét ví dụ sau:

    ```javascript
    ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          color: React.PropTypes.string.isRequired,
          fontSize: React.PropTypes.number.isRequired,
        })
      ).isRequired,
    };
    ```

    **[⬆ Mục lục](#table-of-contents)**

95. ### How to conditionally apply class attributes?

    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

    ```jsx
    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
    ```

    Instead you need to move curly braces outside (don't forget to include spaces between class names):

    ```jsx
    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
    ```

    _Template strings_ will also work:

    ```jsx
    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
    ```

    **[⬆ Mục lục](#table-of-contents)**

96. ### What is the difference between React and ReactDOM?

    The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have _server-side rendering_ support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

    **[⬆ Mục lục](#table-of-contents)**

97. ### Why ReactDOM is separated from React?

    The React team worked on extracting all DOM-related features into a separate library called _ReactDOM_. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM. To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native.

    **[⬆ Mục lục](#table-of-contents)**

98. ### How to use React label element?

    If you try to render a `<label>` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.

    ```jsx
    <label for={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

    Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.

    ```jsx
    <label htmlFor={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

    **[⬆ Mục lục](#table-of-contents)**

99. ### How to combine multiple inline style objects?

    You can use _spread operator_ in regular React:

    ```jsx
    <button style={{ ...styles.panel.button, ...styles.panel.submitButton }}>{'Submit'}</button>
    ```

    If you're using React Native then you can use the array notation:

    ```jsx
    <button style={[styles.panel.button, styles.panel.submitButton]}>{'Submit'}</button>
    ```

    **[⬆ Mục lục](#table-of-contents)**

100. ### How to re-render the view when the browser is resized?


    You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

    ```jsx
        class WindowDimensions extends React.Component {
            constructor(props){
                super(props);
                this.updateDimensions = this.updateDimensions.bind(this);
            }

            componentWillMount() {
                this.updateDimensions()
            }

            componentDidMount() {
                window.addEventListener('resize', this.updateDimensions)
            }

            componentWillUnmount() {
                window.removeEventListener('resize', this.updateDimensions)
            }

            updateDimensions() {
                this.setState({width: window.innerWidth, height: window.innerHeight})
            }

            render() {
                return <span>{this.state.width} x {this.state.height}</span>
            }
        }
    ```

    **[⬆ Mục lục](#table-of-contents)**

101. ### What is the difference between `setState()` and `replaceState()` methods?

     When you use `setState()` the current and previous states are merged. `replaceState()` throws out the current state, and replaces it with only what you provide. Usually `setState()` is used unless you really need to remove all previous keys for some reason. You can also set state to `false`/`null` in `setState()` instead of using `replaceState()`.


    **[⬆ Mục lục](#table-of-contents)**

102. ### How to listen to state changes?

     The following lifecycle methods will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.

     ```
     componentWillUpdate(object nextProps, object nextState)
     componentDidUpdate(object prevProps, object prevState)
     ```


    **[⬆ Mục lục](#table-of-contents)**

103. ### What is the recommended approach of removing an array element in React state?

     The better approach is to use `Array.prototype.filter()` method.

     For example, let's create a `removeItem()` method for updating the state.

     ```javascript
     removeItem(index) {
       this.setState({
         data: this.state.data.filter((item, i) => i !== index)
       })
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

104. ### Is it possible to use React without rendering HTML?

     It is possible with latest version (>=16.2). Below are the possible options:

     ```jsx
     render() {
       return false
     }
     ```

     ```jsx
     render() {
       return null
     }
     ```

     ```jsx
     render() {
       return []
     }
     ```

     ```jsx
     render() {
       return <React.Fragment></React.Fragment>
     }
     ```

     ```jsx
     render() {
       return <></>
     }
     ```

     Returning `undefined` won't work.


    **[⬆ Mục lục](#table-of-contents)**

105. ### How to pretty print JSON with React?

     We can use `<pre>` tag so that the formatting of the `JSON.stringify()` is retained:

     ```jsx
     const data = { name: 'John', age: 42 };

     class User extends React.Component {
       render() {
         return <pre>{JSON.stringify(data, null, 2)}</pre>;
       }
     }

     React.render(<User />, document.getElementById('container'));
     ```


    **[⬆ Mục lục](#table-of-contents)**

106. ### Why you can't update props in React?

     The React philosophy is that props should be _immutable_ and _top-down_. This means that a parent can send any prop values to a child, but the child can't modify received props.


    **[⬆ Mục lục](#table-of-contents)**

107. ### How to focus an input element on page load?

     You can do it by creating _ref_ for `input` element and using it in `componentDidMount()`:

     ```jsx
     class App extends React.Component {
       componentDidMount() {
         this.nameInput.focus();
       }

       render() {
         return (
           <div>
             <input defaultValue={"Won't focus"} />
             <input ref={(input) => (this.nameInput = input)} defaultValue={'Will focus'} />
           </div>
         );
       }
     }

     ReactDOM.render(<App />, document.getElementById('app'));
     ```


    **[⬆ Mục lục](#table-of-contents)**

108. ### What are the possible ways of updating objects in state?

     1. **Calling `setState()` with an object to merge with state:**

        - Using `Object.assign()` to create a copy of the object:

          ```javascript
          const user = Object.assign({}, this.state.user, { age: 42 });
          this.setState({ user });
          ```

        - Using _spread operator_:

          ```javascript
          const user = { ...this.state.user, age: 42 };
          this.setState({ user });
          ```

     2. **Calling `setState()` with a function:**

        ```javascript
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            age: 42,
          },
        }));
        ```


    **[⬆ Mục lục](#table-of-contents)**

109. ### Why function is preferred over object for `setState()`?

     React may batch multiple `setState()` calls into a single update for performance. Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

     This counter example will fail to update as expected:

     ```javascript
     // Wrong
     this.setState({
       counter: this.state.counter + this.props.increment,
     });
     ```

     The preferred approach is to call `setState()` with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

     ```javascript
     // Correct
     this.setState((prevState, props) => ({
       counter: prevState.counter + props.increment,
     }));
     ```


    **[⬆ Mục lục](#table-of-contents)**

110. ### How can we find the version of React at runtime in the browser?

     You can use `React.version` to get the version.

     ```jsx
     const REACT_VERSION = React.version;

     ReactDOM.render(<div>{`React version: ${REACT_VERSION}`}</div>, document.getElementById('app'));
     ```


    **[⬆ Mục lục](#table-of-contents)**

111. ### What are the approaches to include polyfills in your `create-react-app`?

     1. **Manual import from `core-js`:**

        Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.

        ```javascript
        import 'core-js/fn/array/find';
        import 'core-js/fn/array/includes';
        import 'core-js/fn/number/is-nan';
        ```

     2. **Using Polyfill service:**

        Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:

        ```html
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"></script>
        ```

        In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set.


    **[⬆ Mục lục](#table-of-contents)**

112. ### How to use https instead of http in create-react-app?

     You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

     ```json
     "scripts": {
       "start": "set HTTPS=true && react-scripts start"
     }
     ```

     or just run `set HTTPS=true && npm start`


    **[⬆ Mục lục](#table-of-contents)**

113. ### How to avoid using relative path imports in create-react-app?

     Create a file called `.env` in the project root and write the import path:

     ```
     NODE_PATH=src/app
     ```

     After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths.


    **[⬆ Mục lục](#table-of-contents)**

114. ### How to add Google Analytics for React Router?

     Add a listener on the `history` object to record each page view:

     ```javascript
     history.listen(function (location) {
       window.ga('set', 'page', location.pathname + location.search);
       window.ga('send', 'pageview', location.pathname + location.search);
     });
     ```


    **[⬆ Mục lục](#table-of-contents)**

115. ### How to update a component every second?

     You need to use `setInterval()` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

     ```javascript
     componentDidMount() {
       this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
     }

     componentWillUnmount() {
       clearInterval(this.interval)
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

116. ### How do you apply vendor prefixes to inline styles in React?

     React _does not_ apply _vendor prefixes_ automatically. You need to add vendor prefixes manually.

     ```jsx
     <div
       style={{
         transform: 'rotate(90deg)',
         WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
         msTransform: 'rotate(90deg)', // 'ms' is the only lowercase vendor prefix
       }}
     />
     ```


    **[⬆ Mục lục](#table-of-contents)**

117. ### How to import and export components using React and ES6?

     You should use default for exporting the components

     ```jsx
     import React from 'react';
     import User from 'user';

     export default class MyProfile extends React.Component {
       render() {
         return <User type='customer'>//...</User>;
       }
     }
     ```

     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.


    **[⬆ Mục lục](#table-of-contents)**

118. ### What are the exceptions on React component naming?

     The component names should start with a uppercase letter but there are few exceptions on this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.
     For example the below tag can be compiled to a valid component,

     ```javascript
     render(){
        return (
            <obj.component /> // `React.createElement(obj.component)`
           )
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

119. ### Why is a component constructor called only once?

     React's _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.


    **[⬆ Mục lục](#table-of-contents)**

120. ### How to define constants in React?

     You can use ES7 `static` field to define constant.

     ```javascript
     class MyComponent extends React.Component {
       static DEFAULT_PAGINATION = 10;
     }
     ```

     _Static fields_ are part of the _Class Fields_ stage 3 proposal.


    **[⬆ Mục lục](#table-of-contents)**

121. ### How to programmatically trigger click event in React?

     You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method. This can be done in two steps:

     1. Create ref in render method:

        ```jsx
        <input ref={(input) => (this.inputElement = input)} />
        ```

     2. Apply click event in your event handler:

        ```javascript
        this.inputElement.click();
        ```


    **[⬆ Mục lục](#table-of-contents)**

122. ### Is it possible to use async/await in plain React?

     If you want to use `async`/`await` in React, you will need _Babel_ and [transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator) plugin. React Native ships with Babel and a set of transforms.


    **[⬆ Mục lục](#table-of-contents)**

123. ### What are the common folder structures for React?

     There are two common practices for React project file structure.

     1. **Grouping by features or routes:**

        One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

        ```
        common/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ APIUtils.js
        └─ APIUtils.test.js
        feed/
        ├─ index.js
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        └─ FeedAPI.js
        profile/
        ├─ index.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        ├─ ProfileHeader.css
        └─ ProfileAPI.js
        ```

     2. **Grouping by file type:**

        Another popular way to structure projects is to group similar files together.

        ```
        api/
        ├─ APIUtils.js
        ├─ APIUtils.test.js
        ├─ ProfileAPI.js
        └─ UserAPI.js
        components/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        └─ ProfileHeader.css
        ```


    **[⬆ Mục lục](#table-of-contents)**

124. ### What are the popular packages for animation?

     _React Transition Group_ and _React Motion_ are popular animation packages in React ecosystem.


    **[⬆ Mục lục](#table-of-contents)**

125. ### What is the benefit of styles modules?

     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

     For example, these styles could be extracted into a separate component:

     ```javascript
     export const colors = {
       white,
       black,
       blue,
     };

     export const space = [0, 8, 16, 32, 64];
     ```

     And then imported individually in other components:

     ```javascript
     import { space, colors } from './styles';
     ```


    **[⬆ Mục lục](#table-of-contents)**

126. ### What are the popular React-specific linters?

     ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called `eslint-plugin-react`. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types. Another popular plugin is `eslint-plugin-jsx-a11y`, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with `alt` text and `tabindex`, for example, will not be picked up by regular plugins.


    **[⬆ Mục lục](#table-of-contents)**

127. ### How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

     You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in `fetch`. You should fetch data in the `componentDidMount()` lifecycle method. This is so you can use `setState()` to update your component when the data is retrieved.

     For example, the employees list fetched from API and set local state:

     ```jsx
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           employees: [],
           error: null,
         };
       }

       componentDidMount() {
         fetch('https://api.example.com/items')
           .then((res) => res.json())
           .then(
             (result) => {
               this.setState({
                 employees: result.employees,
               });
             },
             (error) => {
               this.setState({ error });
             }
           );
       }

       render() {
         const { error, employees } = this.state;
         if (error) {
           return <div>Error: {error.message}</div>;
         } else {
           return (
             <ul>
               {employees.map((item) => (
                 <li key={employee.name}>
                   {employee.name}-{employees.experience}
                 </li>
               ))}
             </ul>
           );
         }
       }
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

128. ### What are render props?

     **Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

     ```jsx
     <DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />
     ```

     Libraries such as React Router and DownShift are using this pattern.

## React Router

    **[⬆ Mục lục](#table-of-contents)**

129. ### What is React Router?

     React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.


    **[⬆ Mục lục](#table-of-contents)**

130. ### How React Router is different from history library?

     React Router is a wrapper around the `history` library which handles interaction with the browser's `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.


    **[⬆ Mục lục](#table-of-contents)**

131. ### What are the `<Router>` components of React Router v4?

     React Router v4 provides below 3 `<Router>` components:

     1. `<BrowserRouter>`
     2. `<HashRouter>`
     3. `<MemoryRouter>`

     The above components will create _browser_, _hash_, and _memory_ history instances. React Router v4 makes the properties and methods of the `history` instance associated with your router available through the context in the `router` object.


    **[⬆ Mục lục](#table-of-contents)**

132. ### What is the purpose of `push()` and `replace()` methods of `history`?

     A history instance has two methods for navigation purpose.

     1. `push()`
     2. `replace()`

     If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one.


    **[⬆ Mục lục](#table-of-contents)**

133. ### How do you programmatically navigate using React Router v4?

     There are three different ways to achieve programmatic routing/navigation within components.

     1. **Using the `withRouter()` higher-order function:**

        The `withRouter()` higher-order function will inject the history object as a prop of the component. This object provides `push()` and `replace()` methods to avoid the usage of context.

        ```jsx
        import { withRouter } from 'react-router-dom'; // this also works with 'react-router-native'

        const Button = withRouter(({ history }) => (
          <button
            type='button'
            onClick={() => {
              history.push('/new-location');
            }}
          >
            {'Click Me!'}
          </button>
        ));
        ```

     2. **Using `<Route>` component and render props pattern:**

        The `<Route>` component passes the same props as `withRouter()`, so you will be able to access the history methods through the history prop.

        ```jsx
        import { Route } from 'react-router-dom';

        const Button = () => (
          <Route
            render={({ history }) => (
              <button
                type='button'
                onClick={() => {
                  history.push('/new-location');
                }}
              >
                {'Click Me!'}
              </button>
            )}
          />
        );
        ```

     3. **Using context:**

        This option is not recommended and treated as unstable API.

        ```jsx
        const Button = (props, context) => (
          <button
            type='button'
            onClick={() => {
              context.history.push('/new-location');
            }}
          >
            {'Click Me!'}
          </button>
        );

        Button.contextTypes = {
          history: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired,
          }),
        };
        ```


    **[⬆ Mục lục](#table-of-contents)**

134. ### How to get query parameters in React Router v4?

     The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

     ```javascript
     const queryString = require('query-string');
     const parsed = queryString.parse(props.location.search);
     ```

     You can also use `URLSearchParams` if you want something native:

     ```javascript
     const params = new URLSearchParams(props.location.search);
     const foo = params.get('name');
     ```

     You should use a _polyfill_ for IE11.


    **[⬆ Mục lục](#table-of-contents)**

135. ### Why you get "Router may have only one child element" warning?

     You have to wrap your Route's in a `<Switch>` block because `<Switch>` is unique in that it renders a route exclusively.

     At first you need to add `Switch` to your imports:

     ```javascript
     import { Switch, Router, Route } from 'react-router';
     ```

     Then define the routes within `<Switch>` block:

     ```jsx
     <Router>
       <Switch>
         <Route {/* ... */} />
         <Route {/* ... */} />
       </Switch>
     </Router>
     ```


    **[⬆ Mục lục](#table-of-contents)**

136. ### How to pass params to `history.push` method in React Router v4?

     While navigating you can pass props to the `history` object:

     ```javascript
     this.props.history.push({
       pathname: '/template',
       search: '?name=sudheer',
       state: { detail: response.data },
     });
     ```

     The `search` property is used to pass query params in `push()` method.


    **[⬆ Mục lục](#table-of-contents)**

137. ### How to implement _default_ or _NotFound_ page?

     A `<Switch>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below

     ```jsx
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/user' component={User} />
       <Route component={NotFound} />
     </Switch>
     ```


    **[⬆ Mục lục](#table-of-contents)**

138. ### How to get history on React Router v4?

     1. Create a module that exports a `history` object and import this module across the project.

        For example, create `history.js` file:

        ```javascript
        import { createBrowserHistory } from 'history';

        export default createBrowserHistory({
          /* pass a configuration object here if needed */
        });
        ```

     2. You should use the `<Router>` component instead of built-in routers. Imported the above `history.js` inside `index.js` file:

        ```jsx
        import { Router } from 'react-router-dom';
        import history from './history';
        import App from './App';

        ReactDOM.render(
          <Router history={history}>
            <App />
          </Router>,
          holder
        );
        ```

     3. You can also use push method of `history` object similar to built-in history object:

        ```javascript
        // some-other-file.js
        import history from './history';

        history.push('/go-here');
        ```


    **[⬆ Mục lục](#table-of-contents)**

139. ### How to perform automatic redirect after login?

     The `react-router` package provides `<Redirect>` component in React Router. Rendering a `<Redirect>` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

     ```javascript
     import React, { Component } from 'react';
     import { Redirect } from 'react-router';

     export default class LoginComponent extends Component {
       render() {
         if (this.state.isLoggedIn === true) {
           return <Redirect to='/your/redirect/page' />;
         } else {
           return <div>{'Login Please'}</div>;
         }
       }
     }
     ```

## React Internationalization

    **[⬆ Mục lục](#table-of-contents)**

140. ### What is React Intl?

     The _React Intl_ library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of _FormatJS_ which provides bindings to React via its components and API.


    **[⬆ Mục lục](#table-of-contents)**

141. ### What are the main features of React Intl?

     1. Display numbers with separators.
     2. Display dates and times correctly.
     3. Display dates relative to "now".
     4. Pluralize labels in strings.
     5. Support for 150+ languages.
     6. Runs in the browser and Node.
     7. Built on standards.


    **[⬆ Mục lục](#table-of-contents)**

142. ### What are the two ways of formatting in React Intl?

     The library provides two ways to format strings, numbers, and dates: react components or an API.

     ```jsx
     <FormattedMessage id={'account'} defaultMessage={'The amount is less than minimum balance.'} />
     ```

     ```javascript
     const messages = defineMessages({
       accountMessage: {
         id: 'account',
         defaultMessage: 'The amount is less than minimum balance.',
       },
     });

     formatMessage(messages.accountMessage);
     ```


    **[⬆ Mục lục](#table-of-contents)**

143. ### How to use `<FormattedMessage>` as placeholder using React Intl?

     The `<Formatted... />` components from `react-intl` return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.

     ```jsx
     import React from 'react';
     import { injectIntl, intlShape } from 'react-intl';

     const MyComponent = ({ intl }) => {
       const placeholder = intl.formatMessage({ id: 'messageId' });
       return <input placeholder={placeholder} />;
     };

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```


    **[⬆ Mục lục](#table-of-contents)**

144. ### How to access current locale with React Intl?

     You can get the current locale in any component of your application using `injectIntl()`:

     ```jsx
     import { injectIntl, intlShape } from 'react-intl';

     const MyComponent = ({ intl }) => <div>{`The current locale is ${intl.locale}`}</div>;

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```


    **[⬆ Mục lục](#table-of-contents)**

145. ### How to format date using React Intl?

     The `injectIntl()` higher-order component will give you access to the `formatDate()` method via the props in your component. The method is used internally by instances of `FormattedDate` and it returns the string representation of the formatted date.

     ```jsx
     import { injectIntl, intlShape } from 'react-intl';

     const stringDate = this.props.intl.formatDate(date, {
       year: 'numeric',
       month: 'numeric',
       day: 'numeric',
     });

     const MyComponent = ({ intl }) => <div>{`The formatted date is ${stringDate}`}</div>;

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```

## React Testing

    **[⬆ Mục lục](#table-of-contents)**

146. ### What is Shallow Renderer in React testing?

     _Shallow rendering_ is useful for writing unit test cases in React. It lets you render a component _one level deep_ and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

     For example, if you have the following component:

     ```javascript
     function MyComponent() {
       return (
         <div>
           <span className={'heading'}>{'Title'}</span>
           <span className={'description'}>{'Description'}</span>
         </div>
       );
     }
     ```

     Then you can assert as follows:

     ```jsx
     import ShallowRenderer from 'react-test-renderer/shallow';

     // in your test
     const renderer = new ShallowRenderer();
     renderer.render(<MyComponent />);

     const result = renderer.getRenderOutput();

     expect(result.type).toBe('div');
     expect(result.props.children).toEqual([
       <span className={'heading'}>{'Title'}</span>,
       <span className={'description'}>{'Description'}</span>,
     ]);
     ```


    **[⬆ Mục lục](#table-of-contents)**

147. ### What is `TestRenderer` package in React?

     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or `jsdom`.

     ```jsx
     import TestRenderer from 'react-test-renderer';

     const Link = ({ page, children }) => <a href={page}>{children}</a>;

     const testRenderer = TestRenderer.create(<Link page={'https://www.facebook.com/'}>{'Facebook'}</Link>);

     console.log(testRenderer.toJSON());
     // {
     //   type: 'a',
     //   props: { href: 'https://www.facebook.com/' },
     //   children: [ 'Facebook' ]
     // }
     ```


    **[⬆ Mục lục](#table-of-contents)**

148. ### What is the purpose of ReactTestUtils package?

     _ReactTestUtils_ are provided in the `with-addons` package and allow you to perform actions against a simulated DOM for the purpose of unit testing.


    **[⬆ Mục lục](#table-of-contents)**

149. ### What is Jest?

     _Jest_ is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a `jsdom` environment. It's often used for testing components.


    **[⬆ Mục lục](#table-of-contents)**

150. ### What are the advantages of Jest over Jasmine?

     There are couple of advantages compared to Jasmine:

     - Automatically finds tests to execute in your source code.
     - Automatically mocks dependencies when running your tests.
     - Allows you to test asynchronous code synchronously.
     - Runs your tests with a fake DOM implementation (via `jsdom`) so that your tests can be run on the command line.
     - Runs tests in parallel processes so that they finish sooner.


    **[⬆ Mục lục](#table-of-contents)**

151. ### Give a simple example of Jest test case

     Let's write a test for a function that adds two numbers in `sum.js` file:

     ```javascript
     const sum = (a, b) => a + b;

     export default sum;
     ```

     Create a file named `sum.test.js` which contains actual test:

     ```javascript
     import sum from './sum';

     test('adds 1 + 2 to equal 3', () => {
       expect(sum(1, 2)).toBe(3);
     });
     ```

     And then add the following section to your `package.json`:

     ```json
     {
       "scripts": {
         "test": "jest"
       }
     }
     ```

     Finally, run `yarn test` or `npm test` and Jest will print a result:

     ```console
     $ yarn test
     PASS ./sum.test.js
     ✓ adds 1 + 2 to equal 3 (2ms)
     ```

## React Redux

    **[⬆ Mục lục](#table-of-contents)**

152. ### What is flux?

     _Flux_ is an _application design paradigm_ used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

     ![flux](images/flux.png)


    **[⬆ Mục lục](#table-of-contents)**

153. ### What is Redux?

     _Redux_ is a predictable state container for JavaScript apps based on the _Flux design pattern_. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.


    **[⬆ Mục lục](#table-of-contents)**

154. ### What are the core principles of Redux?

     Redux follows three fundamental principles:

     1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
     2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
     3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.


    **[⬆ Mục lục](#table-of-contents)**

155. ### What are the downsides of Redux compared to Flux?

     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

     1. **You will need to learn to avoid mutations:** Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like `redux-immutable-state-invariant`, Immutable.js, or instructing your team to write non-mutating code.
     2. **You're going to have to carefully pick your packages:** While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
     3. **There is no nice Flow integration yet:** Flux currently lets you do very impressive static type checks which Redux doesn't support yet.


    **[⬆ Mục lục](#table-of-contents)**

156. ### What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?

     `mapStateToProps()` is a utility which helps your component get updated state (which is updated by some other components):

     ```javascript
     const mapStateToProps = (state) => {
       return {
         todos: getVisibleTodos(state.todos, state.visibilityFilter),
       };
     };
     ```

     `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

     ```javascript
     const mapDispatchToProps = (dispatch) => {
       return {
         onTodoClick: (id) => {
           dispatch(toggleTodo(id));
         },
       };
     };
     ```

     Recommend always using the “object shorthand” form for the `mapDispatchToProps`

     Redux wrap it in another function that looks like (…args) => dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

     ```javascript
     const mapDispatchToProps = {
       onTodoClick,
     };
     ```


    **[⬆ Mục lục](#table-of-contents)**

157. ### Can I dispatch an action in reducer?

     Dispatching an action within a reducer is an **anti-pattern**. Your reducer should be _without side effects_, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.


    **[⬆ Mục lục](#table-of-contents)**

158. ### How to access Redux store outside a component?

     You just need to export the store from the module where it created with `createStore()`. Also, it shouldn't pollute the global window object.

     ```javascript
     store = createStore(myReducer);

     export default store;
     ```


    **[⬆ Mục lục](#table-of-contents)**

159. ### What are the drawbacks of MVW pattern?

     1. DOM manipulation is very expensive which causes applications to behave slow and inefficient.
     2. Due to circular dependencies, a complicated model was created around models and views.
     3. Lot of data changes happens for collaborative applications(like Google Docs).
     4. No way to do undo (travel back in time) easily without adding so much extra code.


    **[⬆ Mục lục](#table-of-contents)**

160. ### Are there any similarities between Redux and RxJS?

     These libraries are very different for very different purposes, but there are some vague similarities.

     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.


    **[⬆ Mục lục](#table-of-contents)**

161. ### How to dispatch an action on load?

     You can dispatch an action in `componentDidMount()` method and in `render()` method you can verify the data.

     ```javascript
     class App extends Component {
       componentDidMount() {
         this.props.fetchData();
       }

       render() {
         return this.props.isLoaded ? <div>{'Loaded'}</div> : <div>{'Not Loaded'}</div>;
       }
     }

     const mapStateToProps = (state) => ({
       isLoaded: state.isLoaded,
     });

     const mapDispatchToProps = { fetchData };

     export default connect(mapStateToProps, mapDispatchToProps)(App);
     ```


    **[⬆ Mục lục](#table-of-contents)**

162. ### How to use `connect()` from React Redux?

     You need to follow two steps to use your store in your container:

     1. **Use `mapStateToProps()`:** It maps the state variables from your store to the props that you specify.
     2. **Connect the above props to your container:** The object returned by the `mapStateToProps` function is connected to the container. You can import `connect()` from `react-redux`.

        ```jsx
        import React from 'react';
        import { connect } from 'react-redux';

        class App extends React.Component {
          render() {
            return <div>{this.props.containerData}</div>;
          }
        }

        function mapStateToProps(state) {
          return { containerData: state.data };
        }

        export default connect(mapStateToProps)(App);
        ```


    **[⬆ Mục lục](#table-of-contents)**

163. ### How to reset state in Redux?

     You need to write a _root reducer_ in your application which delegate handling the action to the reducer generated by `combineReducers()`.

     For example, let us take `rootReducer()` to return the initial state after `USER_LOGOUT` action. As we know, reducers are supposed to return the initial state when they are called with `undefined` as the first argument, no matter the action.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     });

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         state = undefined;
       }

       return appReducer(state, action);
     };
     ```

     In case of using `redux-persist`, you may also need to clean your storage. `redux-persist` keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     });

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         Object.keys(state).forEach((key) => {
           storage.removeItem(`persist:${key}`);
         });

         state = undefined;
       }

       return appReducer(state, action);
     };
     ```


    **[⬆ Mục lục](#table-of-contents)**

164. ### Whats the purpose of `at` symbol in the Redux connect decorator?

     The **@** symbol is in fact a JavaScript expression used to signify decorators. _Decorators_ make it possible to annotate and modify classes and properties at design time.

     Let's take an example setting up Redux without and with a decorator.

     - **Without decorator:**

       ```javascript
       import React from 'react';
       import * as actionCreators from './actionCreators';
       import { bindActionCreators } from 'redux';
       import { connect } from 'react-redux';

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       class MyApp extends React.Component {
         // ...define your main app here
       }

       export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
       ```

     - **With decorator:**

       ```javascript
       import React from 'react';
       import * as actionCreators from './actionCreators';
       import { bindActionCreators } from 'redux';
       import { connect } from 'react-redux';

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       @connect(mapStateToProps, mapDispatchToProps)
       export default class MyApp extends React.Component {
         // ...define your main app here
       }
       ```

     The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.


    **[⬆ Mục lục](#table-of-contents)**

165. ### What is the difference between React context and React Redux?

     You can use **Context** in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas **Redux** is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.


    **[⬆ Mục lục](#table-of-contents)**

166. ### Why are Redux state functions called reducers?

     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could _reduce_ a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.


    **[⬆ Mục lục](#table-of-contents)**

167. ### How to make AJAX request in Redux?

     You can use `redux-thunk` middleware which allows you to define async actions.

     Let's take an example of fetching specific account as an AJAX call using _fetch API_:

     ```javascript
     export function fetchAccount(id) {
       return (dispatch) => {
         dispatch(setLoadingAccountState()); // Show a loading spinner
         fetch(`/account/${id}`, (response) => {
           dispatch(doneFetchingAccount()); // Hide loading spinner
           if (response.status === 200) {
             dispatch(setAccount(response.json)); // Use a normal function to set the received state
           } else {
             dispatch(someError);
           }
         });
       };
     }

     function setAccount(data) {
       return { type: 'SET_Account', data: data };
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

168. ### Should I keep all component's state in Redux store?

     Keep your data in the Redux store, and the UI related state internally in the component.


    **[⬆ Mục lục](#table-of-contents)**

169. ### What is the proper way to access Redux store?

     The best way to access your store in a component is to use the `connect()` function, that creates a new component that wraps around your existing one. This pattern is called _Higher-Order Components_, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let's take an example of `<FilterLink>` component using connect:

     ```javascript
     import { connect } from 'react-redux';
     import { setVisibilityFilter } from '../actions';
     import Link from '../components/Link';

     const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.visibilityFilter,
     });

     const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
     });

     const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

     export default FilterLink;
     ```

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using `connect()` over accessing the store directly (using context API).

     ```javascript
     class MyComponent {
       someMethod() {
         doSomethingWith(this.context.store);
       }
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

170. ### What is the difference between component and container in React Redux?

     **Component** is a class or function component that describes the presentational part of your application.

     **Container** is an informal term for a component that is connected to a Redux store. Containers _subscribe_ to Redux state updates and _dispatch_ actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.


    **[⬆ Mục lục](#table-of-contents)**

171. ### What is the purpose of the constants in Redux?

     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a `ReferenceError` immediately.

     Normally we will save them in a single file (`constants.js` or `actionTypes.js`).

     ```javascript
     export const ADD_TODO = 'ADD_TODO';
     export const DELETE_TODO = 'DELETE_TODO';
     export const EDIT_TODO = 'EDIT_TODO';
     export const COMPLETE_TODO = 'COMPLETE_TODO';
     export const COMPLETE_ALL = 'COMPLETE_ALL';
     export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
     ```

     In Redux you use them in two places:

     1. **During action creation:**

        Let's take `actions.js`:

        ```javascript
        import { ADD_TODO } from './actionTypes';

        export function addTodo(text) {
          return { type: ADD_TODO, text };
        }
        ```

     2. **In reducers:**

        Let's create `reducer.js`:

        ```javascript
        import { ADD_TODO } from './actionTypes';

        export default (state = [], action) => {
          switch (action.type) {
            case ADD_TODO:
              return [
                ...state,
                {
                  text: action.text,
                  completed: false,
                },
              ];
            default:
              return state;
          }
        };
        ```


    **[⬆ Mục lục](#table-of-contents)**

172. ### What are the different ways to write `mapDispatchToProps()`?

     There are a few ways of binding _action creators_ to `dispatch()` in `mapDispatchToProps()`. Below are the possible options:

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: () => dispatch(action()),
     });
     ```

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: bindActionCreators(action, dispatch),
     });
     ```

     ```javascript
     const mapDispatchToProps = { action };
     ```

     The third option is just a shorthand for the first one.


    **[⬆ Mục lục](#table-of-contents)**

173. ### What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?

     If the `ownProps` parameter is specified, React Redux will pass the props that were passed to the component into your _connect_ functions. So, if you use a connected component:

     ```jsx
     import ConnectedComponent from './containers/ConnectedComponent';

     <ConnectedComponent user={'john'} />;
     ```

     The `ownProps` inside your `mapStateToProps()` and `mapDispatchToProps()` functions will be an object:

     ```javascript
     {
       user: 'john';
     }
     ```

     You can use this object to decide what to return from those functions.


    **[⬆ Mục lục](#table-of-contents)**

174. ### How to structure Redux top level directories?

     Most of the applications has several top-level directories as below:

     1. **Components**: Used for _dumb_ components unaware of Redux.
     2. **Containers**: Used for _smart_ components connected to Redux.
     3. **Actions**: Used for all action creators, where file names correspond to part of the app.
     4. **Reducers**: Used for all reducers, where files name correspond to state key.
     5. **Store**: Used for store initialization.

     This structure works well for small and medium size apps.


    **[⬆ Mục lục](#table-of-contents)**

175. ### What is redux-saga?

     `redux-saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

     It is available in NPM:

     ```console
     $ npm install --save redux-saga
     ```


    **[⬆ Mục lục](#table-of-contents)**

176. ### What is the mental model of redux-saga?

     _Saga_ is like a separate thread in your application, that's solely responsible for side effects. `redux-saga` is a redux _middleware_, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.


    **[⬆ Mục lục](#table-of-contents)**

177. ### What are the differences between `call()` and `put()` in redux-saga?

     Both `call()` and `put()` are effect creator functions. `call()` function is used to create effect description, which instructs middleware to call the promise. `put()` function creates an effect, which instructs middleware to dispatch an action to the store.

     Let's take example of how these effects work for fetching particular user data.

     ```javascript
     function* fetchUserSaga(action) {
       // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
       // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
       const userData = yield call(api.fetchUser, action.userId);

       // Instructing middleware to dispatch corresponding action.
       yield put({
         type: 'FETCH_USER_SUCCESS',
         userData,
       });
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

178. ### What is Redux Thunk?

     _Redux Thunk_ middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch()` and `getState()` as parameters.


    **[⬆ Mục lục](#table-of-contents)**

179. ### What are the differences between `redux-saga` and `redux-thunk`?

     Both _Redux Thunk_ and _Redux Saga_ take care of dealing with side effects. In most of the scenarios, Thunk uses _Promises_ to deal with them, whereas Saga uses _Generators_. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.


    **[⬆ Mục lục](#table-of-contents)**

180. ### What is Redux DevTools?

     _Redux DevTools_ is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.


    **[⬆ Mục lục](#table-of-contents)**

181. ### What are the features of Redux DevTools?

     1. Lets you inspect every state and action payload.
     2. Lets you go back in time by _cancelling_ actions.
     3. If you change the reducer code, each _staged_ action will be re-evaluated.
     4. If the reducers throw, you will see during which action this happened, and what the error was.
     5. With `persistState()` store enhancer, you can persist debug sessions across page reloads.


    **[⬆ Mục lục](#table-of-contents)**

182. ### What are Redux selectors and why to use them?

     _Selectors_ are functions that take Redux state as an argument and return some data to pass to the component.

     For example, to get user details from the state:

     ```javascript
     const getUserData = (state) => state.user.data;
     ```


    **[⬆ Mục lục](#table-of-contents)**

183. ### What is Redux Form?

     _Redux Form_ works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.


    **[⬆ Mục lục](#table-of-contents)**

184. ### What are the main features of Redux Form?

     1. Field values persistence via Redux store.
     2. Validation (sync/async) and submission.
     3. Formatting, parsing and normalization of field values.


    **[⬆ Mục lục](#table-of-contents)**

185. ### How to add multiple middlewares to Redux?

     You can use `applyMiddleware()`.

     For example, you can add `redux-thunk` and `logger` passing them as arguments to `applyMiddleware()`:

     ```javascript
     import { createStore, applyMiddleware } from 'redux';
     const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
     ```


    **[⬆ Mục lục](#table-of-contents)**

186. ### How to set initial state in Redux?

     You need to pass initial state as second argument to createStore:

     ```javascript
     const rootReducer = combineReducers({
       todos: todos,
       visibilityFilter: visibilityFilter,
     });

     const initialState = {
       todos: [{ id: 123, name: 'example', completed: false }],
     };

     const store = createStore(rootReducer, initialState);
     ```


    **[⬆ Mục lục](#table-of-contents)**

187. ### How Relay is different from Redux?

     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via _GraphQL_ queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

## React Native

    **[⬆ Mục lục](#table-of-contents)**

188. ### What is the difference between React Native and React?

     **React** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

     **React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.


    **[⬆ Mục lục](#table-of-contents)**

189. ### How to test React Native apps?

     React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.


    **[⬆ Mục lục](#table-of-contents)**

190. ### How to do logging in React Native?

     You can use `console.log`, `console.warn`, etc. As of React Native v0.29 you can simply run the following to see logs in the console:

     ```
     $ react-native log-ios
     $ react-native log-android
     ```


    **[⬆ Mục lục](#table-of-contents)**

191. ### How to debug your React Native?

     Follow the below steps to debug React Native app:

     1. Run your application in the iOS simulator.
     2. Press `Command + D` and a webpage should open up at `http://localhost:8081/debugger-ui`.
     3. Enable _Pause On Caught Exceptions_ for a better debugging experience.
     4. Press `Command + Option + I` to open the Chrome Developer tools, or open it via `View` -> `Developer` -> `Developer Tools`.
     5. You should now be able to debug as you normally would.

## React supported libraries & Integration

    **[⬆ Mục lục](#table-of-contents)**

192. ### What is reselect and how it works?

     _Reselect_ is a **selector library** (for Redux) which uses _memoization_ concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

     Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.


    **[⬆ Mục lục](#table-of-contents)**

193. ### What is Flow?

     _Flow_ is a _static type checker_ designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving `null`, unlike most type systems.


    **[⬆ Mục lục](#table-of-contents)**

194. ### What is the difference between Flow and PropTypes?

     Flow is a _static analysis tool_ (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time. PropTypes is a _basic type checker_ (runtime checker) which has been patched onto React. It can't check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.


    **[⬆ Mục lục](#table-of-contents)**

195. ### How to use Font Awesome icons in React?

     The below steps followed to include Font Awesome in React:

     1. Install `font-awesome`:

     ```console
     $ npm install --save font-awesome
     ```

     2. Import `font-awesome` in your `index.js` file:

     ```javascript
     import 'font-awesome/css/font-awesome.min.css';
     ```

     3. Add Font Awesome classes in `className`:

     ```javascript
     render() {
       return <div><i className={'fa fa-spinner'} /></div>
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

196. ### What is React Dev Tools?

     _React Developer Tools_ let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

     The official extensions available for different browsers or environments.

     1. **Chrome extension**
     2. **Firefox extension**
     3. **Standalone app** (Safari, React Native, etc)


    **[⬆ Mục lục](#table-of-contents)**

197. ### Why is DevTools not loading in Chrome for local files?

     If you opened a local HTML file in your browser (`file://...`) then you must first open _Chrome Extensions_ and check `Allow access to file URLs`.


    **[⬆ Mục lục](#table-of-contents)**

198. ### How to use Polymer in React?

     1. Create a Polymer element:

        ```jsx
        <link rel='import' href='../../bower_components/polymer/polymer.html' />;
        Polymer({
          is: 'calender-element',
          ready: function () {
            this.textContent = 'I am a calender';
          },
        });
        ```

     2. Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the `index.html` of your React application:

        ```html
        <link rel="import" href="./src/polymer-components/calender-element.html" />
        ```

        3. Use that element in the JSX file:

        ```javascript
        import React from 'react';

        class MyComponent extends React.Component {
          render() {
            return <calender-element />;
          }
        }

        export default MyComponent;
        ```


    **[⬆ Mục lục](#table-of-contents)**

199. ### What are the advantages of React over Vue.js?

     React has the following advantages over Vue.js:

     1. Gives more flexibility in large apps developing.
     2. Easier to test.
     3. Suitable for mobile apps creating.
     4. More information and solutions available.


    **[⬆ Mục lục](#table-of-contents)**

200. ### What is the difference between React and Angular?

     | React                                                                                       | Angular                                                                                                                            |
     | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
     | React is a library and has only the View layer                                              | Angular is a framework and has complete MVC functionality                                                                          |
     | React handles rendering on the server side                                                  | AngularJS renders only on the client side but Angular 2 and above renders on the server side                                       |
     | React uses JSX that looks like HTML in JS which can be confusing                            | Angular follows the template approach for HTML, which makes code shorter and easy to understand                                    |
     | React Native, which is a React type to build mobile applications are faster and more stable | Ionic, Angular's mobile native app is relatively less stable and slower                                                            |
     | In React, data flows only in one way and hence debugging is easy                            | In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult |


    **[⬆ Mục lục](#table-of-contents)**

201. ### Why React tab is not showing up in DevTools?

     When the page loads, _React DevTools_ sets a global named `__REACT_DEVTOOLS_GLOBAL_HOOK__`, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won't show up the tab.


    **[⬆ Mục lục](#table-of-contents)**

202. ### What are Styled Components?

     `styled-components` is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.


    **[⬆ Mục lục](#table-of-contents)**

203. ### Give an example of Styled Components?

     Lets create `<Title>` and `<Wrapper>` components with specific styles for each.

     ```javascript
     import React from 'react';
     import styled from 'styled-components';

     // Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
     const Title = styled.h1`
       font-size: 1.5em;
       text-align: center;
       color: palevioletred;
     `;

     // Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
     const Wrapper = styled.section`
       padding: 4em;
       background: papayawhip;
     `;
     ```

     These two variables, `Title` and `Wrapper`, are now components that you can render just like any other react component.

     ```jsx
     <Wrapper>
       <Title>{'Lets start first styled component!'}</Title>
     </Wrapper>
     ```


    **[⬆ Mục lục](#table-of-contents)**

204. ### What is Relay?

     Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.


    **[⬆ Mục lục](#table-of-contents)**

205. ### How to use TypeScript in `create-react-app` application?

     Starting from react-scripts@2.1.0 or higher, there is a built-in support for typescript. You can just pass `--typescript` option as below

     ```bash
     npx create-react-app my-app --typescript

     # or

     yarn create react-app my-app --typescript
     ```

     But for lower versions of react scripts, just supply `--scripts-version` option as `react-scripts-ts` while you create a new project. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.

     Now the project layout should look like the following:

     ```
     my-app/
     ├─ .gitignore
     ├─ images.d.ts
     ├─ node_modules/
     ├─ public/
     ├─ src/
     │  └─ ...
     ├─ package.json
     ├─ tsconfig.json
     ├─ tsconfig.prod.json
     ├─ tsconfig.test.json
     └─ tslint.json
     ```

## Miscellaneous

    **[⬆ Mục lục](#table-of-contents)**

206. ### What are the main features of Reselect library?

     1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
     2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
     3. Selectors are composable. They can be used as input to other selectors.

207. #### Give an example of Reselect usage?

     Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

     ```javascript
     import { createSelector } from 'reselect';

     const shopItemsSelector = (state) => state.shop.items;
     const taxPercentSelector = (state) => state.shop.taxPercent;

     const subtotalSelector = createSelector(shopItemsSelector, (items) => items.reduce((acc, item) => acc + item.value, 0));

     const taxSelector = createSelector(
       subtotalSelector,
       taxPercentSelector,
       (subtotal, taxPercent) => subtotal * (taxPercent / 100)
     );

     export const totalSelector = createSelector(subtotalSelector, taxSelector, (subtotal, tax) => ({
       total: subtotal + tax,
     }));

     let exampleState = {
       shop: {
         taxPercent: 8,
         items: [
           { name: 'apple', value: 1.2 },
           { name: 'orange', value: 0.95 },
         ],
       },
     };

     console.log(subtotalSelector(exampleState)); // 2.15
     console.log(taxSelector(exampleState)); // 0.172
     console.log(totalSelector(exampleState)); // { total: 2.322 }
     ```


    **[⬆ Mục lục](#table-of-contents)**

208. ### What is an action in Redux?

     _Actions_ are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

     For example an example action which represents adding a new todo item:

     ```
     {
       type: ADD_TODO,
       text: 'Add todo item'
     }
     ```


    **[⬆ Mục lục](#table-of-contents)**

209. ### Does the statics object work with ES6 classes in React?

     No, `statics` only works with `React.createClass()`:

     ```javascript
     someComponent = React.createClass({
       statics: {
         someMethod: function () {
           // ..
         },
       },
     });
     ```

     But you can write statics inside ES6+ classes or writing them outside class as below,

     ```javascript
     class Component extends React.Component {
       static propTypes = {
         // ...
       };

       static someMethod() {
         // ...
       }
     }
     ```

     ```javascript
     class Component extends React.Component {
        ....
     }

     Component.propTypes = {...}
     Component.someMethod = function(){....}
     ```


    **[⬆ Mục lục](#table-of-contents)**

210. ### Can Redux only be used with React?

     Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.


    **[⬆ Mục lục](#table-of-contents)**

211. ### Do you need to have a particular build tool to use Redux?

     Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.


    **[⬆ Mục lục](#table-of-contents)**

212. ### How Redux Form `initialValues` get updated from state?

     You need to add `enableReinitialize : true` setting.

     ```javascript
     const InitializeFromStateForm = reduxForm({
       form: 'initializeFromState',
       enableReinitialize: true,
     })(UserEdit);
     ```

     If your `initialValues` prop gets updated, your form will update too.


    **[⬆ Mục lục](#table-of-contents)**

213. ### How React PropTypes allow different types for one prop?

     You can use `oneOfType()` method of `PropTypes`.

     For example, the height property can be defined with either `string` or `number` type as below:

     ```javascript
     Component.PropTypes = {
       size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
     };
     ```


    **[⬆ Mục lục](#table-of-contents)**

214. ### Can I import an SVG file as react component?

     You can import SVG directly as component instead of loading it as a file. This feature is available with `react-scripts@2.0.0` and higher.

     ```jsx
     import { ReactComponent as Logo } from './logo.svg';

     const App = () => (
       <div>
         {/* Logo is an actual react component */}
         <Logo />
       </div>
     );
     ```

     **Note**: Don't forget about the curly braces in the import.


    **[⬆ Mục lục](#table-of-contents)**

215. ### Why are inline ref callbacks or functions not recommended?

     If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

     ```jsx
     class UserForm extends Component {
       handleSubmit = () => {
         console.log("Input Value is: ", this.input.value)
       }
     ```


       render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={(input) => this.input = input} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     ```

     But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

     ```jsx
     class UserForm extends Component {
      handleSubmit = () => {
        console.log("Input Value is: ", this.input.value)
      }

      setSearchInput = (input) => {
        this.input = input
      }

      render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={this.setSearchInput} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     ```

    **[⬆ Mục lục](#table-of-contents)**

216. ### What is render hijacking in react?

     The concept of render hijacking is the ability to control what a component will output from another component. It actually means that you decorate your component by wrapping it into a Higher-Order component. By wrapping you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enables hijacking, but by using HOC you make your component behave in different way.


    **[⬆ Mục lục](#table-of-contents)**

217. ### What are HOC factory implementations?

     There are two main ways of implementing HOCs in React. 1. Props Proxy (PP) and 2. Inheritance Inversion (II). They follow different approaches for manipulating the _WrappedComponent_.

     **Props Proxy**

     In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

     ```jsx
     function ppHOC(WrappedComponent) {
       return class PP extends React.Component {
         render() {
           return <WrappedComponent {...this.props} />;
         }
       };
     }
     ```

     **Inheritance Inversion**

     In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

     ```jsx
     function iiHOC(WrappedComponent) {
       return class Enhancer extends WrappedComponent {
         render() {
           return super.render();
         }
       };
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

218. ### How to pass numbers to React component?

     You should be passing the numbers via curly braces({}) where as strings inn quotes

     ```jsx
     React.render(<User age={30} department={'IT'} />, document.getElementById('container'));
     ```

     **[⬆ Mục lục](#table-of-contents)**

219. ### Do I need to keep all my state into Redux? Should I ever use react internal state?

     It is up to developer decision. i.e, It is developer job to determine what kinds of state make up your application, and where each piece of state should live. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.

     Below are the thumb rules to determine what kind of data should be put into Redux

     1. Do other parts of the application care about this data?
     2. Do you need to be able to create further derived data based on this original data?
     3. Is the same data being used to drive multiple components?
     4. Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
     5. Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?


    **[⬆ Mục lục](#table-of-contents)**

220. ### What is the purpose of registerServiceWorker in React?

     React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now. It's all about adding offline capabilities to your site.

     ```jsx
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';
     import registerServiceWorker from './registerServiceWorker';

     ReactDOM.render(<App />, document.getElementById('root'));
     registerServiceWorker();
     ```

     **[⬆ Mục lục](#table-of-contents)**

221. ### What is React memo function?

     Class components can be restricted from rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.

     ```jsx
     const MyComponent = React.memo(function MyComponent(props) {
       /* only rerenders if props change */
     });
     ```

     **[⬆ Mục lục](#table-of-contents)**

222. ### What is React lazy function?

     The React.lazy function lets you render an dynamic import as a regular component. It will automatically load the bundle containing the OtherComponent when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.

     ```jsx
     const OtherComponent = React.lazy(() => import('./OtherComponent'));

     function MyComponent() {
       return (
         <div>
           <OtherComponent />
         </div>
       );
     }
     ```

     **Note:**
     React.lazy and Suspense is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable.
     **[⬆ Mục lục](#table-of-contents)**

223. ### How to prevent unnecessary updates using setState?

     You can compare current value of the state with an existing state value and decide whether to rerender the page or not. If the values are same then you need to return **null** to stop rerendering otherwise return the latest state value. For example, the user profile information is conditionally rendered as follows,

     ```jsx
     getUserProfile = (user) => {
       const latestAddress = user.address;
       this.setState((state) => {
         if (state.address === latestAddress) {
           return null;
         } else {
           return { title: latestAddress };
         }
       });
     };
     ```

     **[⬆ Mục lục](#table-of-contents)**

224. ### How do you render Array, Strings and Numbers in React 16 Version?

     **Arrays**: Unlike older releases, you don't need to make sure **render** method return a single element in React16. You are able to return multiple sibling elements without a wrapping element by returning an array. For example, let us take the below list of developers,

     ```jsx
     const ReactJSDevs = () => {
       return [<li key='1'>John</li>, <li key='2'>Jackie</li>, <li key='3'>Jordan</li>];
     };
     ```

     You can also merge this array of items in another array component

     ```jsx
     const JSDevs = () => {
       return (
         <ul>
           <li>Brad</li>
           <li>Brodge</li>
           <ReactJSDevs />
           <li>Brandon</li>
         </ul>
       );
     };
     ```

     **Strings and Numbers:** You can also return string and number type from the render method

     ```jsx
     render() {
      return 'Welcome to ReactJS questions';
     }
     // Number
     render() {
      return 2018;
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

225. ### How to use class field declarations syntax in React classes?

     React Class Components can be made much more concise using the class field declarations. You can initialize local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them. Let's take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

     ```jsx
     class Counter extends Component {
       state = { value: 0 };

       handleIncrement = () => {
         this.setState((prevState) => ({
           value: prevState.value + 1,
         }));
       };

       handleDecrement = () => {
         this.setState((prevState) => ({
           value: prevState.value - 1,
         }));
       };

       render() {
         return (
           <div>
             {this.state.value}

             <button onClick={this.handleIncrement}>+</button>
             <button onClick={this.handleDecrement}>-</button>
           </div>
         );
       }
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

226. ### What are hooks?

     Hooks is a new feature that lets you use state and other React features without writing a class. Let's see an example of useState hook example,

     ```jsx
     import { useState } from 'react';

     function Example() {
       // Declare a new state variable, which we'll call "count"
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>Click me</button>
         </div>
       );
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

227. ### What are the rules needs to follow for hooks?

     You need to follow two rules inorder to use hooks

     1. Call Hooks only at the top level of your react functions. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple useState and useEffect calls.
     2. Call Hooks from React Functions only. i.e, You shouldn’t call Hooks from regular JavaScript functions.


    **[⬆ Mục lục](#table-of-contents)**

228. ### How to ensure hooks followed the rules in your project?
     React team released an ESLint plugin called **eslint-plugin-react-hooks** that enforces these two rules. You can add this plugin to your project using the below command,
     ```javascript
     npm install eslint-plugin-react-hooks@next
     ```
     And apply the below config in your ESLint config file,
     ```javascript
     // Your ESLint configuration
     {
       "plugins": [
         // ...
         "react-hooks"
       ],
       "rules": {
         // ...
         "react-hooks/rules-of-hooks": "error"
       }
     }
     ```
     **Note:** This plugin is intended to use in Create React App by default.


    **[⬆ Mục lục](#table-of-contents)**

229. ### What are the differences between Flux and Redux?

     Below are the major differences between Flux and Redux

     | Flux                                           | Redux                                      |
     | ---------------------------------------------- | ------------------------------------------ |
     | State is mutable                               | State is immutable                         |
     | The Store contains both state and change logic | The Store and change logic are separate    |
     | There are multiple stores exist                | There is only one store exist              |
     | All the stores are disconnected and flat       | Single store with hierarchical reducers    |
     | It has a singleton dispatcher                  | There is no concept of dispatcher          |
     | React components subscribe to the store        | Container components uses connect function |

     **[⬆ Mục lục](#table-of-contents)**

230. ### What are the benefits of React Router V4?

     Below are the main benefits of React Router V4 module,

     1. In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(<BrowserRouter>) which wraps specific child router components(<Route>).
     2. You don't need to manually set history. The router module will take care history by wrapping routes with <BrowserRouter> component.
     3. The application size is reduced by adding only the specific router module(Web, core, or native)
        **[⬆ Mục lục](#table-of-contents)**

231. ### Can you describe about componentDidCatch lifecycle method signature?

     The **componentDidCatch** lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,

     1. error: - The error object which was thrown
     2. info: - An object with a componentStack key contains the information about which component threw the error.

     The method structure would be as follows

     ```javascript
     componentDidCatch(error, info);
     ```

     **[⬆ Mục lục](#table-of-contents)**

232. ### In which scenarios error boundaries do not catch errors?

     Below are the cases in which error boundaries doesn't work

     1. Inside Event handlers
     2. Asynchronous code using **setTimeout or requestAnimationFrame** callbacks
     3. During Server side rendering
     4. When errors thrown in the error boundary code itself
        **[⬆ Mục lục](#table-of-contents)**

233. ### Why do not you need error boundaries for event handlers?

     Error boundaries do not catch errors inside event handlers. Event handlers don't happened or invoked during rendering time unlike render method or lifecycle methods. So React knows how to recover these kind of errors in event handlers.
     If still you need to catch an error inside event handler, use the regular JavaScript try / catch statement as below

     ```javascript
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = { error: null };
       }

       handleClick = () => {
         try {
           // Do something that could throw
         } catch (error) {
           this.setState({ error });
         }
       };

       render() {
         if (this.state.error) {
           return <h1>Caught an error.</h1>;
         }
         return <div onClick={this.handleClick}>Click Me</div>;
       }
     }
     ```

     The above code is catching the error using vanilla javascript try/catch block instead of error boundaries.
     **[⬆ Mục lục](#table-of-contents)**

234. ### What is the difference between try catch block and error boundaries?
     Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.
     For example, the try catch block used for below imperative code
     ```javascript
     try {
       showButton();
     } catch (error) {
       // ...
     }
     ```
     Whereas error boundaries wrap declarative code as below,
     ```javascript
     <ErrorBoundary>
       <MyComponent />
     </ErrorBoundary>
     ```
     So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.


    **[⬆ Mục lục](#table-of-contents)**

235. ### What is the behavior of uncaught errors in react 16?

     In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.
     **[⬆ Mục lục](#table-of-contents)**

236. ### What is the proper placement for error boundaries?

     The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,

     1. You can wrap top-level route components to display a generic error message for the entire application.
     2. You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.
        **[⬆ Mục lục](#table-of-contents)**

237. ### What is the benefit of component stack trace from error boundary?

     Apart from error messages and javascript stack, React16 will display the component stack trace with file names and line numbers using error boundary concept. For example, BuggyCounter component displays the component stack trace as below,

     ![stacktrace](images/error_boundary.png)


    **[⬆ Mục lục](#table-of-contents)**

238. ### What is the required method to be defined for a class component?

     The render() method is the only required method in a class component. i.e, All methods other than render method are optional for a class component.
     **[⬆ Mục lục](#table-of-contents)**

239. ### What are the possible return types of render method?
     Below are the list of following types used and return from render method,
     1. **React elements:** Elements that instruct React to render a DOM node. It includes html elements such as `<div/>` and user defined elements.
     2. **Arrays and fragments:** Return multiple elements to render as Arrays and Fragments to wrap multiple elements
     3. **Portals:** Render children into a different DOM subtree.
     4. **String and numbers:** Render both Strings and Numbers as text nodes in the DOM
     5. **Booleans or null:** Doesn't render anything but these types are used to conditionally render content.


    **[⬆ Mục lục](#table-of-contents)**

240. ### What is the main purpose of constructor?

     The constructor is mainly used for two purposes,

     1. To initialize local state by assigning object to this.state
     2. For binding event handler methods to the instance
        For example, the below code covers both the above cases,

     ```javascript
     constructor(props) {
       super(props);
       // Don't call this.setState() here!
       this.state = { counter: 0 };
       this.handleClick = this.handleClick.bind(this);
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

241. ### Is it mandatory to define constructor for React component?

     No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
     **[⬆ Mục lục](#table-of-contents)**

242. ### What are default props?

     The defaultProps are defined as a property on the component class to set the default props for the class. This is used for undefined props, but not for null props. For example, let us create color default prop for the button component,

     ```javascript
     class MyButton extends React.Component {
       // ...
     }

     MyButton.defaultProps = {
       color: 'red',
     };
     ```

     If props.color is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses default value

     ```javascript
     render() {
        return <MyButton /> ; // props.color will be set to red
      }
     ```

     **Note:** If you provide null value then it remains null value.
     **[⬆ Mục lục](#table-of-contents)**

243. ### Why should not call setState in componentWillUnmount?

     You should not call setState() in componentWillUnmount() because Once a component instance is unmounted, it will never be mounted again.
     **[⬆ Mục lục](#table-of-contents)**

244. ### What is the purpose of getDerivedStateFromError?

     This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state. The signature of the lifecycle method is as follows,

     ```javascript
     static getDerivedStateFromError(error)
     ```

     Let us take error boundary use case with the above lifecycle method for demonistration purpose,

     ```javascript
     class ErrorBoundary extends React.Component {
       constructor(props) {
         super(props);
         this.state = { hasError: false };
       }

       static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

       render() {
         if (this.state.hasError) {
           // You can render any custom fallback UI
           return <h1>Something went wrong.</h1>;
         }

         return this.props.children;
       }
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

245. ### What is the methods order when component re-rendered?
     An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.
     1. static getDerivedStateFromProps()
     2. shouldComponentUpdate()
     3. render()
     4. getSnapshotBeforeUpdate()
     5. componentDidUpdate()


    **[⬆ Mục lục](#table-of-contents)**

246. ### What are the methods invoked during error handling?

     Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

     1. static getDerivedStateFromError()
     2. componentDidCatch()
        **[⬆ Mục lục](#table-of-contents)**

247. ### What is the purpose of displayName class property?

     The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.
     For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.

     ```javascript
     function withSubscription(WrappedComponent) {
       class WithSubscription extends React.Component {
         /* ... */
       }
       WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
       return WithSubscription;
     }
     function getDisplayName(WrappedComponent) {
       return WrappedComponent.displayName || WrappedComponent.name || 'Component';
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

248. ### What is the browser support for react applications?

     React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use **es5-shim and es5-sham** polyfill then it even support old browsers that doesn't support ES5 methods.
     **[⬆ Mục lục](#table-of-contents)**

249. ### What is the purpose of unmountComponentAtNode method?

     This method is available from react-dom package and it removes a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.
     The method signature would be as follows,

     ```javascript
     ReactDOM.unmountComponentAtNode(container);
     ```

     **[⬆ Mục lục](#table-of-contents)**

250. ### What is code-splitting?

     Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.
     For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.
     **moduleA.js**

     ```javascript
     const moduleA = 'Hello';

     export { moduleA };
     ```

     **App.js**

     ```javascript
     import React, { Component } from 'react';

     class App extends Component {
       handleClick = () => {
         import('./moduleA')
           .then(({ moduleA }) => {
             // Use moduleA
           })
           .catch((err) => {
             // Handle failure
           });
       };

       render() {
         return (
           <div>
             <button onClick={this.handleClick}>Load</button>
           </div>
         );
       }
     }

     export default App;
     ```

     **[⬆ Mục lục](#table-of-contents)**

251. ### What is the benefit of strict mode?

     The <StrictMode> will be helpful in the below cases

     1. Identifying components with **unsafe lifecycle methods**.
     2. Warning about **legacy string ref** API usage.
     3. Detecting unexpected **side effects**.
     4. Detecting **legacy context** API.
     5. Warning about deprecated findDOMNode usage
        **[⬆ Mục lục](#table-of-contents)**

252. ### What are Keyed Fragments?

     The Fragments declared with the explicit <React.Fragment> syntax may have keys. The general usecase is mapping a collection to an array of fragments as below,

     ```javascript
     function Glossary(props) {
       return (
         <dl>
           {props.items.map((item) => (
             // Without the `key`, React will fire a key warning
             <React.Fragment key={item.id}>
               <dt>{item.term}</dt>
               <dd>{item.description}</dd>
             </React.Fragment>
           ))}
         </dl>
       );
     }
     ```

     **Note:** key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.
     **[⬆ Mục lục](#table-of-contents)**

253. ### Does React support all HTML attributes?

     As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs. Let us take few props with respect to standard HTML attributes,

     ```javascript
     <div tabIndex="-1" />      // Just like node.tabIndex DOM API
     <div className="Button" /> // Just like node.className DOM API
     <input readOnly={true} />  // Just like node.readOnly DOM API
     ```

     These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.
     **[⬆ Mục lục](#table-of-contents)**

254. ### What are the limitations with HOCs?

     Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order

     1. **Don’t Use HOCs Inside the render Method:**
        It is not recommended to apply a HOC to a component within the render method of a component.
        ```javascript
        render() {
          // A new version of EnhancedComponent is created on every render
          // EnhancedComponent1 !== EnhancedComponent2
          const EnhancedComponent = enhance(MyComponent);
          // That causes the entire subtree to unmount/remount each time!
          return <EnhancedComponent />;
        }
        ```
        The above code impact performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once
     2. **Static Methods Must Be Copied Over:**
        When you apply a HOC to a component the new component does not have any of the static methods of the original component

        ```javascript
        // Define a static method
        WrappedComponent.staticMethod = function () {
          /*...*/
        };
        // Now apply a HOC
        const EnhancedComponent = enhance(WrappedComponent);

        // The enhanced component has no static method
        typeof EnhancedComponent.staticMethod === 'undefined'; // true
        ```

        You can overcome this by copying the methods onto the container before returning it

        ```javascript
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {
            /*...*/
          }
          // Must know exactly which method(s) to copy :(
          Enhance.staticMethod = WrappedComponent.staticMethod;
          return Enhance;
        }
        ```

     3. **Refs Aren’t Passed Through:**
        For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API
        **[⬆ Mục lục](#table-of-contents)**

255. ### How to debug forwardRefs in DevTools?

     **React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component. For example, If you don't name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

     ```javascript
     const WrappedComponent = React.forwardRef((props, ref) => {
       return <LogProps {...props} forwardedRef={ref} />;
     });
     ```

     But If you name the render function then it will appear as **”ForwardRef(myFunction)”**

     ```javascript
     const WrappedComponent = React.forwardRef(function myFunction(props, ref) {
       return <LogProps {...props} forwardedRef={ref} />;
     });
     ```

     As an alternative, You can also set displayName property for forwardRef function,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         // ...
       }

       function forwardRef(props, ref) {
         return <LogProps {...props} forwardedRef={ref} />;
       }

       // Give this component a more helpful display name in DevTools.
       // e.g. "ForwardRef(logProps(MyComponent))"
       const name = Component.displayName || Component.name;
       forwardRef.displayName = `logProps(${name})`;

       return React.forwardRef(forwardRef);
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

256. ### When component props defaults to true?

     If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML. For example, below expressions are equivalent,

     ```javascript
     <MyInput autocomplete />

     <MyInput autocomplete={true} />
     ```

     **Note:** It is not recommend using this approach because it can be confused with the ES6 object shorthand (example, {name} which is short for {name: name})
     **[⬆ Mục lục](#table-of-contents)**

257. ### What is NextJS and major features of it?

     Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It also provides styling and routing solutions. Below are the major features provided by NextJS,

     1. Server-rendered by default
     2. Automatic code splitting for faster page loads
     3. Simple client-side routing (page based)
     4. Webpack-based dev environment which supports (HMR)
     5. Able to implement with Express or any other Node.js HTTP server
     6. Customizable with your own Babel and Webpack configurations
        **[⬆ Mục lục](#table-of-contents)**

258. ### How do you pass an event handler to a component?

     You can pass event handlers and other functions as props to child components. It can be used in child component as below,

     ```
     <button onClick={this.handleClick}>
     ```

     **[⬆ Mục lục](#table-of-contents)**

259. ### Is it good to use arrow functions in render methods?

     Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

     ```javascript
     class Foo extends Component {
       handleClick() {
         console.log('Click happened');
       }
       render() {
         return <button onClick={() => this.handleClick()}>Click Me</button>;
       }
     }
     ```

     **Note:** Using an arrow function in render method creates a new function each time the component renders, which may have performance implications
     **[⬆ Mục lục](#table-of-contents)**

260. ### How to prevent a function from being called multiple times?

     If you use an event handler such as **onClick or onScroll** and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,

     1. **Throttling:** Changes based on a time based frequency. For example, it can be used using \_.throttle lodash function
     2. **Debouncing:** Publish changes after a period of inactivity. For example, it can be used using \_.debounce lodash function
     3. **RequestAnimationFrame throttling:** Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function
        **[⬆ Mục lục](#table-of-contents)**

261. ### How JSX prevents Injection Attacks?

     React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. For example, you can embed user input as below,

     ```javascript
     const name = response.potentiallyMaliciousInput;
     const element = <h1>{name}</h1>;
     ```

     This way you can prevent XSS(Cross-site-scripting) attacks in the application.
     **[⬆ Mục lục](#table-of-contents)**

262. ### How do you update rendered elements?

     You can update UI(represented by rendered element) by passing the newly created element to ReactDOM's render method. For example, lets take a ticking clock example, where it updates the time by calling render method multiple times,

     ```javascript
     function tick() {
       const element = (
         <div>
           <h1>Hello, world!</h1>
           <h2>It is {new Date().toLocaleTimeString()}.</h2>
         </div>
       );
       ReactDOM.render(element, document.getElementById('root'));
     }

     setInterval(tick, 1000);
     ```

     **[⬆ Mục lục](#table-of-contents)**

263. ### How do you say that props are read only?

     When you declare a component as a function or a class, it must never modify its own props. Let us take a below capital function,

     ```javascript
     function capital(amount, interest) {
       return amount + interest;
     }
     ```

     The above function is called “pure” because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying "All React components must act like pure functions with respect to their props."
     **[⬆ Mục lục](#table-of-contents)**

264. ### How do you say that state updates are merged?

     When you call setState() in the component, React merges the object you provide into the current state. For example, let us take a facebook user with posts and comments details as state variables,

     ```javascript
       constructor(props) {
         super(props);
         this.state = {
           posts: [],
           comments: []
         };
       }
     ```

     Now you can update them independently with separate setState() calls as below,

     ```javascript
      componentDidMount() {
         fetchPosts().then(response => {
           this.setState({
             posts: response.posts
           });
         });

         fetchComments().then(response => {
           this.setState({
             comments: response.comments
           });
         });
       }
     ```

     As mentioned in the above code snippets, this.setState({comments}) updates only comments variable without modifying or replacing posts variable.
     **[⬆ Mục lục](#table-of-contents)**

265. ### How do you pass arguments to an event handler?

     During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method. Let us take an example of user details updated in a grid,

     ```javascript
     <button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
     <button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
     ```

     In both the approaches, the synthetic argument e is passed as a second argument. You need to pass it explicitly for arrow functions and it forwarded automatically for bind method.
     **[⬆ Mục lục](#table-of-contents)**

266. ### How to prevent component from rendering?

     You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

     ```javascript
     function Greeting(props) {
       if (!props.loggedIn) {
         return null;
       }

       return <div className='greeting'>welcome, {props.name}</div>;
     }
     ```

     ```javascript
     class User extends React.Component {
       constructor(props) {
         super(props);
         this.state = {loggedIn: false, name: 'John'};
       }

       render() {
        return (
            <div>
              //Prevent component render if it is not loggedIn
              <Greeting loggedIn={this.state.loggedIn} />
              <UserDetails name={this.state.name}>
            </div>
        );
       }
     ```

     In the above example, the greeting component skips its rendering section by applying condition and returning null value.
     **[⬆ Mục lục](#table-of-contents)**

267. ### What are the conditions to safely use the index as a key?
     There are three conditions to make sure, it is safe use the index as a key.
     1. The list and items are static– they are not computed and do not change
     2. The items in the list have no ids
     3. The list is never reordered or filtered.


    **[⬆ Mục lục](#table-of-contents)**

268. ### Is it keys should be globally unique?

     Keys used within arrays should be unique among their siblings but they don’t need to be globally unique. i.e, You can use the same keys withtwo different arrays. For example, the below book component uses two arrays with different arrays,

     ```javascript
     function Book(props) {
       const index = (
         <ul>
           {props.pages.map((page) => (
             <li key={page.id}>{page.title}</li>
           ))}
         </ul>
       );
       const content = props.pages.map((page) => (
         <div key={page.id}>
           <h3>{page.title}</h3>
           <p>{page.content}</p>
           <p>{page.pageNumber}</p>
         </div>
       ));
       return (
         <div>
           {index}
           <hr />
           {content}
         </div>
       );
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

269. ### What is the popular choice for form handling?

     Formik is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission. In detail, You can categorize them as follows,

     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission

     It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.
     **[⬆ Mục lục](#table-of-contents)**

270. ### What are the advantages of formik over redux form library?
     Below are the main reasons to recommend formik over redux form library
     1. The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
     2. Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.
     3. Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB


    **[⬆ Mục lục](#table-of-contents)**

271. ### Why do you not required to use inheritance?

     In React, it is recommend using composition instead of inheritance to reuse code between components. Both Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way.
     Whereas, If you want to reuse non-UI functionality between components, it is suggested to extracting it into a separate JavaScript module. Later components import it and use that function, object, or a class, without extending it.
     **[⬆ Mục lục](#table-of-contents)**

272. ### Can I use web components in react application?

     Yes, you can use web components in a react application. Even though many developers won't use this combination, it may require especially if you are using third-party UI components that are written using Web Components. For example, let us use Vaadin date picker web component as below,

     ```javascript
     import React, { Component } from 'react';
     import './App.css';
     import '@vaadin/vaadin-date-picker';
     class App extends Component {
       render() {
         return (
           <div className='App'>
             <vaadin-date-picker label='When were you born?'></vaadin-date-picker>
           </div>
         );
       }
     }
     export default App;
     ```

     **[⬆ Mục lục](#table-of-contents)**

273. ### What is dynamic import?

     The dynamic import() syntax is a ECMAScript proposal not currently part of the language standard. It is expected to be accepted in the near future. You can achieve code-splitting into your app using dynamic import(). Let's take an example of addition,

     1. **Normal Import**

     ```javascript
     import { add } from './math';
     console.log(add(10, 20));
     ```

     2. **Dynamic Import**

     ```javascript
     import('./math').then((math) => {
       console.log(math.add(10, 20));
     });
     ```

     **[⬆ Mục lục](#table-of-contents)**

274. ### What are loadable components?

     If you want to do code-splitting in a server rendered app, it is recommend to use Loadable Components because React.lazy and Suspense is not yet available for server-side rendering. Loadable lets you render a dynamic import as a regular component. Lets take an example,

     ```javascript
     import loadable from '@loadable/component';

     const OtherComponent = loadable(() => import('./OtherComponent'));

     function MyComponent() {
       return (
         <div>
           <OtherComponent />
         </div>
       );
     }
     ```

     Now OtherComponent will be loaded in a separated bundle
     **[⬆ Mục lục](#table-of-contents)**

275. ### What is suspense component?

     If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you’re waiting for it to load using a loading indicator. This can be done using **Suspense** component. For example, the below code uses suspense component,

     ```javascript
     const OtherComponent = React.lazy(() => import('./OtherComponent'));

     function MyComponent() {
       return (
         <div>
           <Suspense fallback={<div>Loading...</div>}>
             <OtherComponent />
           </Suspense>
         </div>
       );
     }
     ```

     As mentioned in the above code, Suspense is wrapped above the lazy component.
     **[⬆ Mục lục](#table-of-contents)**

276. ### What is route based code splitting?

     One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won't be disturbed. Let us take an example of route based website using libraries like React Router with React.lazy,

     ```javascript
     import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
     import React, { Suspense, lazy } from 'react';

     const Home = lazy(() => import('./routes/Home'));
     const About = lazy(() => import('./routes/About'));

     const App = () => (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route exact path='/' component={Home} />
             <Route path='/about' component={About} />
           </Switch>
         </Suspense>
       </Router>
     );
     ```

     In the above code, the code splitting will happen at each route level.
     **[⬆ Mục lục](#table-of-contents)**

277. ### Give an example on How to use context?

     **Context** is designed to share data that can be considered **global** for a tree of React components. For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

     ```javascript
     //Lets create a context with a default theme value "luna"
     const ThemeContext = React.createContext('luna');
     // Create App component where it uses provider to pass theme value in the tree
     class App extends React.Component {
       render() {
         return (
           <ThemeContext.Provider value='nova'>
             <Toolbar />
           </ThemeContext.Provider>
         );
       }
     }
     // A middle component where you don't need to pass theme prop anymore
     function Toolbar(props) {
       return (
         <div>
           <ThemedButton />
         </div>
       );
     }
     // Lets read theme value in the button component to use
     class ThemedButton extends React.Component {
       static contextType = ThemeContext;
       render() {
         return <Button theme={this.context} />;
       }
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

278. ### What is the purpose of default value in context?

     The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Below code snippet provides default theme value as Luna.

     ```javascript
     const MyContext = React.createContext(defaultValue);
     ```

     **[⬆ Mục lục](#table-of-contents)**

279. ### How do you use contextType?

     ContextType is used to consume the context object. The contextType property can be used in two ways,

     1. **contextType as property of class:**
        The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.
        Lets assign contextType property on MyClass as below,

     ```javascript
     class MyClass extends React.Component {
       componentDidMount() {
         let value = this.context;
         /* perform a side-effect at mount using the value of MyContext */
       }
       componentDidUpdate() {
         let value = this.context;
         /* ... */
       }
       componentWillUnmount() {
         let value = this.context;
         /* ... */
       }
       render() {
         let value = this.context;
         /* render something based on the value of MyContext */
       }
     }
     MyClass.contextType = MyContext;
     ```

     2. **Static field**
        You can use a static class field to initialize your contextType using public class field syntax.

     ```javascript
     class MyClass extends React.Component {
       static contextType = MyContext;
       render() {
         let value = this.context;
         /* render something based on the value */
       }
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

280. ### What is a consumer?

     A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. Lets take a simple example,

     ```javascript
     <MyContext.Consumer>
       {value => /* render something based on the context value */}
     </MyContext.Consumer>
     ```

     **[⬆ Mục lục](#table-of-contents)**

281. ### How do you solve performance corner cases while using context?

     The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders. For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

     ```javascript
     class App extends React.Component {
       render() {
         return (
           <Provider value={{ something: 'something' }}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```

     This can be solved by lifting up the value to parent state,

     ```javascript
     class App extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: { something: 'something' },
         };
       }

       render() {
         return (
           <Provider value={this.state.value}>
             <Toolbar />
           </Provider>
         );
       }
     }
     ```

     **[⬆ Mục lục](#table-of-contents)**

282. ### What is the purpose of forward ref in HOCs?

     Refs will not get passed through because ref is not a prop. It handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.
     The below HOC logs all props,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         componentDidUpdate(prevProps) {
           console.log('old props:', prevProps);
           console.log('new props:', this.props);
         }

         render() {
           const { forwardedRef, ...rest } = this.props;

           // Assign the custom prop "forwardedRef" as a ref
           return <Component ref={forwardedRef} {...rest} />;
         }
       }

       return React.forwardRef((props, ref) => {
         return <LogProps {...props} forwardedRef={ref} />;
       });
     }
     ```

     Let's use this HOC to log all props that get passed to our “fancy button” component,

     ```javascript
     class FancyButton extends React.Component {
       focus() {
         // ...
       }

       // ...
     }
     export default logProps(FancyButton);
     ```

     Now lets create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

     ```javascript
     import FancyButton from './FancyButton';

     const ref = React.createRef();
     ref.current.focus();
     <FancyButton label='Click Me' handleClick={handleClick} ref={ref} />;
     ```

     **[⬆ Mục lục](#table-of-contents)**

283. ### Is it ref argument available for all functions or class components?

     Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.
     **[⬆ Mục lục](#table-of-contents)**

284. ### Why do you need additional care for component libraries while using forward refs?

     When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.
     **[⬆ Mục lục](#table-of-contents)**

285. ### How to create react class components without ES6?

     If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

     ```javascript
     var Greeting = createReactClass({
       getDefaultProps: function () {
         return {
           name: 'Jhohn',
         };
       },
       getInitialState: function () {
         return { message: this.props.message };
       },
       handleClick: function () {
         console.log(this.state.message);
       },
       render: function () {
         return <h1>Hello, {this.props.name}</h1>;
       },
     });
     ```

     **Note:** If you use createReactClass then autobinding is available for all methods. i.e, You don't need to use .bind(this) with in constructor for event handlers.
     **[⬆ Mục lục](#table-of-contents)**

286. ### Is it possible to use react without JSX?

     Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). For example, let us take a greeting example with JSX,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return <div>Hello {this.props.message}</div>;
       }
     }

     ReactDOM.render(<Greeting message='World' />, document.getElementById('root'));
     ```

     You can write the same code without JSX as below,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return React.createElement('div', null, `Hello ${this.props.message}`);
       }
     }

     ReactDOM.render(React.createElement(Greeting, { message: 'World' }, null), document.getElementById('root'));
     ```

     **[⬆ Mục lục](#table-of-contents)**

287. ### What is diffing algorithm?

     React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.
     In this case, for displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

     1. Two elements of different types will produce different trees.
     2. The developer can hint at which child elements may be stable across different renders with a key prop.
        **[⬆ Mục lục](#table-of-contents)**

288. ### What are the rules covered by diffing algorithm?

     When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,

     1. **Elements Of Different Types:**
        Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example, elements <a> to <img>, or from <Article> to <Comment> of different types lead a full rebuild.
     2. **DOM Elements Of The Same Type:**
        When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,

        ```javascript
        <div className="show" title="ReactJS" />

        <div className="hide" title="ReactJS" />
        ```

     3. **Component Elements Of The Same Type:**
        When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.
     4. **Recursing On Children:**
        when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.

        ```javascript
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>

        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>

        ```

     5. **Handling keys:**
        React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,

     ```javascript
     <ul>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>

     <ul>
       <li key="2014">Connecticut</li>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>
     ```

     **[⬆ Mục lục](#table-of-contents)**

289. ### When do you need to use refs?

     There are few use cases to go for refs

     1. Managing focus, text selection, or media playback.
     2. Triggering imperative animations.
     3. Integrating with third-party DOM libraries.
        **[⬆ Mục lục](#table-of-contents)**

290. ### Is it prop must be named as render for render props?

     Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e, Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,

     ```javascript
     <Mouse
       children={(mouse) => (
         <p>
           The mouse position is {mouse.x}, {mouse.y}
         </p>
       )}
     />
     ```

     Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,

     ```javascript
     <Mouse>
       {(mouse) => (
         <p>
           The mouse position is {mouse.x}, {mouse.y}
         </p>
       )}
     </Mouse>
     ```

     While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

     ```javascript
     Mouse.propTypes = {
       children: PropTypes.func.isRequired,
     };
     ```

     **[⬆ Mục lục](#table-of-contents)**

291. ### What are the problems of using render props with pure components?

     If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.
     **[⬆ Mục lục](#table-of-contents)**

292. ### How do you create HOC using render props?

     You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a <Mouse> component, you could easily create one using a regular <Mouse> with a render prop.

     ```javascript
     function withMouse(Component) {
       return class extends React.Component {
         render() {
           return <Mouse render={(mouse) => <Component {...this.props} mouse={mouse} />} />;
         }
       };
     }
     ```

     This way render props gives the flexibility of using either pattern.
     **[⬆ Mục lục](#table-of-contents)**

293. ### What is windowing technique?

     Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data.
     **[⬆ Mục lục](#table-of-contents)**

294. ### How do you print falsy values in JSX?

     The falsy values such as false, null, undefined, and true are valid children but they don't render anything. If you still want to display them then you need to convert it to string. Let's take an example on how to convert to a string,

     ```javascript
     <div>My JavaScript variable is {String(myVariable)}.</div>
     ```

     **[⬆ Mục lục](#table-of-contents)**

295. ### What is the typical use case of portals?

     React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context(z-index,position,opacity etc styles) and you need to visually “break out” of its container. For example, dialogs, global message notifications, hovercards, and tooltips.
     **[⬆ Mục lục](#table-of-contents)**

296. ### How do you set default value for uncontrolled component?

     In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a **defaultValue** attribute instead of **value**.

     ```javascript
     render() {
       return (
         <form onSubmit={this.handleSubmit}>
           <label>
             User Name:
             <input
               defaultValue="John"
               type="text"
               ref={this.input} />
           </label>
           <input type="submit" value="Submit" />
         </form>
       );
     }
     ```

     The same applies for `select` and `textArea` inputs. But you need to use **defaultChecked** for `checkbox` and `radio` inputs.
     **[⬆ Mục lục](#table-of-contents)**

297. ### What is your favorite React stack?

     Even though the tech stack varies from developer to developer, the most popular stack is used in react boilerplate project code. It mainly uses Redux and redux-saga for state management and asynchronous side-effects, react-router for routing purpose, styled-components for styling react components, axios for invoking REST api, and other supported stack such as webpack, reselect, ESNext, Babel.
     You can clone the project https://github.com/react-boilerplate/react-boilerplate and start working on any new react project.
     **[⬆ Mục lục](#table-of-contents)**

298. ### What is the difference between Real DOM and Virtual DOM?

     Below are the main differences between Real DOM and Virtual DOM,

     | Real DOM                             | Virtual DOM                          |
     | ------------------------------------ | ------------------------------------ |
     | Updates are slow                     | Updates are fast                     |
     | DOM manipulation is very expensive.  | DOM manipulation is very easy        |
     | You can update HTML directly.        | You Can’t directly update HTML       |
     | It causes too much of memory wastage | There is no memory wastage           |
     | Creates a new DOM if element updates | It updates the JSX if element update |


    **[⬆ Mục lục](#table-of-contents)**

299. ### How to add Bootstrap to a react application?

     Bootstrap can be added to your React app in a three possible ways

     1. Using the Bootstrap CDN:
        This is the easiest way to add bootstrap. Add both bootstrap CSS and JS resources in a head tag.
     2. Bootstrap as Dependency:
        If you are using a build tool or a module bundler such as Webpack, then this is the preferred option for adding Bootstrap to your React application
        ```javascript
        npm install bootstrap
        ``
        ```
     3. React Bootstrap Package:
        In this case, you can add Bootstrap to our React app is by using a package that has rebuilt Bootstrap components to work particularly as React components. Below packages are popular in this category, 1. react-bootstrap 2. reactstrap
        **[⬆ Mục lục](#table-of-contents)**

300. ### Can you list down top websites or applications using react as front end framework?

     Below are the `top 10 websites` using React as their front-end framework,

     1. Facebook
     2. Uber
     3. Instagram
     4. WhatsApp
     5. Khan Academy
     6. Airbnb
     7. Dropbox
     8. Flipboard
     9. Netflix
     10. PayPal
         **[⬆ Mục lục](#table-of-contents)**

301. ### Is it recommended to use CSS In JS technique in React?

     React does not have any opinion about how styles are defined but if you are a beginner then good starting point is to define your styles in a separate \*.css file as usual and refer to them using className. This functionality is not part of React but came from third-party libraries. But If you want to try a different approach(CSS-In-JS) then styled-components library is a good option.
     **[⬆ Mục lục](#table-of-contents)**

302. ### Do I need to rewrite all my class components with hooks?

     No. But you can try Hooks in a few components(or new components) without rewriting any existing code. Because there are no plans to remove classes in ReactJS.
     **[⬆ Mục lục](#table-of-contents)**

303. ### How to fetch data with React Hooks?

     The effect hook called `useEffect` is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook’s update function.
     Let's take an example in which it fetches list of react articles from the API

     ```javascript
     import React, { useState, useEffect } from 'react';
     import axios from 'axios';

     function App() {
       const [data, setData] = useState({ hits: [] });

       useEffect(async () => {
         const result = await axios('http://hn.algolia.com/api/v1/search?query=react');

         setData(result.data);
       }, []);

       return (
         <ul>
           {data.hits.map((item) => (
             <li key={item.objectID}>
               <a href={item.url}>{item.title}</a>
             </li>
           ))}
         </ul>
       );
     }

     export default App;
     ```

     Remember we provided an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component. i.e, It fetches only for component mount.
     **[⬆ Mục lục](#table-of-contents)**

304. ### Is Hooks cover all use cases for classes?

     Hooks doesn't cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon **getSnapshotBeforeUpdate** and **componentDidCatch** lifecycles yet.
     **[⬆ Mục lục](#table-of-contents)**

305. ### What is the stable release for hooks support?

     React includes a stable implementation of React Hooks in 16.8 release for below packages

     1. React DOM
     2. React DOM Server
     3. React Test Renderer
     4. React Shallow Renderer
        **[⬆ Mục lục](#table-of-contents)**

306. ### Why do we use array destructuring (square brackets notation) in `useState`?
     When we declare a state variable with `useState`, it returns a pair — an array with two items. The first item is the current value, and the second is a function that updates the value. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.
     For example, the array index access would look as follows:
     ```javascript
     var userStateVariable = useState('userProfile'); // Returns an array pair
     var user = userStateVariable[0]; // Access first item
     var setUser = userStateVariable[1]; // Access second item
     ```
     Whereas with array destructuring the variables can be accessed as follows:
     ```javascript
     const [user, setUser] = useState('userProfile');
     ```


    **[⬆ Mục lục](#table-of-contents)**

307. ### What are the sources used for introducing hooks?

     Hooks got the ideas from several different sources. Below are some of them,

     1. Previous experiments with functional APIs in the react-future repository
     2. Community experiments with render prop APIs such as Reactions Component
     3. State variables and state cells in DisplayScript.
     4. Subscriptions in Rx.
     5. Reducer components in ReasonReact.
        **[⬆ Mục lục](#table-of-contents)**

308. ### How do you access imperative API of web components?

     Web Components often expose an imperative API to implement its functions. You will need to use a **ref** to interact with the DOM node directly if you want to access imperative API of a web component. But if you are using third-party Web Components, the best solution is to write a React component that behaves as a **wrapper** for your Web Component.
     **[⬆ Mục lục](#table-of-contents)**

309. ### What is formik?
     Formik is a small react form library that helps you with the three major problems,
     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission


    **[⬆ Mục lục](#table-of-contents)**

310. ### What are typical middleware choices for handling asynchronous calls in Redux?

     Some of the popular middleware choices for handling asynchronous calls in Redux eco system are `Redux Thunk, Redux Promise, Redux Saga`.
     **[⬆ Mục lục](#table-of-contents)**

311. ### Is browsers understand JSX code?

     No, browsers can't understand JSX code. You need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler right now is Babel.
     **[⬆ Mục lục](#table-of-contents)**

312. ### Describe about data flow in react?

     React implements one-way reactive data flow using props which reduce boilerplate and is easier to understand than traditional two-way data binding.
     **[⬆ Mục lục](#table-of-contents)**

313. ### What is react scripts?

     The `react-scripts` package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The `react-scripts start` command sets up the development environment and starts a server, as well as hot module reloading.
     **[⬆ Mục lục](#table-of-contents)**

314. ### What are the features of create react app?
     Below are the list of some of the features provided by create react app.
     1. React, JSX, ES6, Typescript and Flow syntax support.
     2. Autoprefixed CSS
     3. CSS Reset/Normalize
     4. A live development server
     5. A fast interactive unit test runner with built-in support for coverage reporting
     6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
     7. An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.


    **[⬆ Mục lục](#table-of-contents)**

315. ### What is the purpose of renderToNodeStream method?

     The `ReactDOMServer#renderToNodeStream` method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes.
     **Note:** Remember this method is not available in the browser but only server.
     **[⬆ Mục lục](#table-of-contents)**

316. ### What is MobX?

     MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For reactJs application, you need to install below packages,

     ```bash
     npm install mobx --save
     npm install mobx-react --save
     ```

     **[⬆ Mục lục](#table-of-contents)**

317. ### What are the differences between Redux and MobX?

     Below are the main differences between Redux and MobX,

     | Topic         | Redux                                                         | MobX                                                                   |
     | ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
     | Definition    | It is a javascript library for managing the application state | It is a library for reactively managing the state of your applications |
     | Programming   | It is mainly written in ES6                                   | It is written in JavaScript(ES5)                                       |
     | Data Store    | There is only one large store exist for data storage          | There is more than one store for storage                               |
     | Usage         | Mainly used for large and complex applications                | Used for simple applications                                           |
     | Performance   | Need to be improved                                           | Provides better performance                                            |
     | How it stores | Uses JS Object to store                                       | Uses observable to store the data                                      |


    **[⬆ Mục lục](#table-of-contents)**

318. ### Should I learn ES6 before learning ReactJS?

     No, you don’t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let's see some of the frequently used ES6 features,

     1. Destructuring: To get props and use them in a component

     ```javascript
     // in es 5
     var someData = this.props.someData;
     var dispatch = this.props.dispatch;

     // in es6
     const { someData, dispatch } = this.props;
     ```

     2. Spread operator: Helps in passing props down into a component

     ```javascript
     // in es 5
     <SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} />

     // in es6
     <SomeComponent {...this.props} />
     ```

     3. Arrow functions: Makes compact syntax

     ```javascript
     // es 5
     var users = usersList.map(function (user) {
       return <li>{user.name}</li>;
     });
     // es 6
     const users = usersList.map((user) => <li>{user.name}</li>);
     ```

     **[⬆ Mục lục](#table-of-contents)**

319. ### What is Concurrent Rendering?

     The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,

     ```javascript
     // 1. Part of an app by wrapping with ConcurrentMode
     <React.unstable_ConcurrentMode>
       <Something />
     </React.unstable_ConcurrentMode>;

     // 2. Whole app using createRoot
     ReactDOM.unstable_createRoot(domNode).render(<App />);
     ```

     **[⬆ Mục lục](#table-of-contents)**

320. ### What is the difference between async mode and concurrent mode?

     Both refers the same thing. Previously concurrent Mode being referred to as "Async Mode" by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.
     **[⬆ Mục lục](#table-of-contents)**

321. ### Can I use javascript urls in react16.9?

     Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like <a href> and create a security hole.

     ```javascript
     const companyProfile = {
       website: "javascript: alert('Your website is hacked')",
     };
     // It will log a warning
     <a href={companyProfile.website}>More details</a>;
     ```

     Remember that the future versions will throw an error for javascript URLs.
     **[⬆ Mục lục](#table-of-contents)**

322. ### What is the purpose of eslint plugin for hooks?

     The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with ”use” and a capital letter right after it is a Hook. In particular, the rule enforces that,

     1. Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).
     2. Hooks are called in the same order on every render.
        **[⬆ Mục lục](#table-of-contents)**

323. ### What is the difference between Imperative and Declarative in React?
     Imagine a simple UI component, such as a "Like" button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

The imperative way of doing this would be:

            ```javascript
            if( user.likes() ) {
                if( hasBlue() ) {
                    removeBlue();
                    addGrey();
                } else {
                    removeGrey();
                    addBlue();
                }
            }```

Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

In contrast, the declarative approach would be:

            ```javascript
            if( this.state.liked ) {
                return <blueLike />;
            } else {
                return <greyLike />;
            }```

Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.
**[⬆ Mục lục](#table-of-contents)**

324. ### ?
