"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[345],{908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(5893),s=n(1151);const o={sidebar_position:1},a="Ribir Practice: Develop a Todos app",d={id:"practice_todos_app/develop_a_todos_app",title:"Ribir Practice: Develop a Todos app",description:"This chapter will show you how to develop a Ribir application by building a simple Todos app, and help you consolidate the basic concepts and usage of Ribir.",source:"@site/docs/practice_todos_app/develop_a_todos_app.md",sourceDirName:"practice_todos_app",slug:"/practice_todos_app/develop_a_todos_app",permalink:"/docs/practice_todos_app/develop_a_todos_app",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"RChangelog[bot]",lastUpdatedAt:1705565423,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Practice Todos App",permalink:"/docs/category/practice-todos-app"},next:{title:"Improving styles and animations",permalink:"/docs/practice_todos_app/improving_styles_and_animations"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Code structure",id:"code-structure",level:2},{value:"Develop the core",id:"develop-the-core",level:2},{value:"Describing the UI",id:"describing-the-ui",level:2},{value:"Build the overall structure with Ribir",id:"build-the-overall-structure-with-ribir",level:3},{value:"Add the ability to enter tasks",id:"add-the-ability-to-enter-tasks",level:3},{value:"Adding a Task List",id:"adding-a-task-list",level:3},{value:"Adding the ability to edit task",id:"adding-the-ability-to-edit-task",level:3},{value:"Improving Styles and Animations",id:"improving-styles-and-animations",level:2},{value:"Complete Code",id:"complete-code",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ribir-practice-develop-a-todos-app",children:"Ribir Practice: Develop a Todos app"}),"\n",(0,i.jsx)(t.p,{children:"This chapter will show you how to develop a Ribir application by building a simple Todos app, and help you consolidate the basic concepts and usage of Ribir."}),"\n",(0,i.jsx)(t.p,{children:"This app will allow you to add, delete, edit and mark tasks finish, and support automatic save."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"You will learn:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to develop and design a Todos application using the recommended Ribir approach."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To complete this tutorial, we assume that you:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Mastered the basic concepts and syntax of ",(0,i.jsx)(t.a,{href:"https://www.rust-lang.org/learn",children:"Rust"})," language"]}),"\n",(0,i.jsxs)(t.li,{children:["Completed the prerequisite tutorial series ",(0,i.jsx)(t.a,{href:"/docs/get_started/quick_start",children:"Getting Started"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"showcase",children:"Showcase"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"todos demo",src:n(5138).Z+"",width:"1078",height:"1336"})}),"\n",(0,i.jsx)(t.h2,{id:"code-structure",children:"Code structure"}),"\n",(0,i.jsx)(t.p,{children:"As a GUI framework, one of Ribir's most important goals is to enable you to concentrate on abstracting data structures and algorithms (business logic) during the initial stages of application design, without the need to consider the UI. The UI can be developed as a completely independent module, and they are interacted through the API defined by the former."}),"\n",(0,i.jsxs)(t.p,{children:["So, in the Ribir repository, you will find that almost all non-pure UI examples have two main files: an ",(0,i.jsx)(t.code,{children:"xxx.rs"})," file with the same name as the application, which implements the core data and logic of the application; a ",(0,i.jsx)(t.code,{children:"ui.rs"})," file that implements the UI description of the core data. In addition, there is a ",(0,i.jsx)(t.code,{children:"main.rs"})," file as the entry point of the application."]}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, we also organize our Todos app in the same way:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"- src\n  - main.rs\n  - todos.rs\n  - ui.rs\n"})}),"\n",(0,i.jsx)(t.h2,{id:"develop-the-core",children:"Develop the core"}),"\n",(0,i.jsx)(t.p,{children:"Ribir doesn't start with dividing widgets, organizing hierarchical structures, or managing UI states. Ribir recommends that you first abstract the core data structures and logic of the application, design and define the API, and then organize your UI based on your data and visual effects."}),"\n",(0,i.jsx)(t.p,{children:"Of course, if multiple people are developing, the above work can be carried out in parallel. Because you need to complete the entire chapter tutorial by yourself, let's proceed step by step in order. The first step is to complete the development of the core data structure part and not consider the UI at all."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'// todos.rs\n\nuse serde::{Deserialize, Serialize};\nuse std::{\n  collections::BTreeMap,\n  fs::File,\n  io::{self, BufWriter, Write},\n};\n\n#[derive(Debug, Serialize, Deserialize)]\npub struct Todos {\n  tasks: BTreeMap<TaskId, Task>,\n  next_id: TaskId,\n}\n\n#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]\npub struct Task {\n  id: TaskId,\n  pub complete: bool,\n  pub label: String,\n}\n\n#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]\npub struct TaskId(usize);\n\nimpl Todos {\n  pub fn new_task(&mut self, label: String) -> TaskId {\n    let id = self.next_id;\n    self.next_id = self.next_id.next();\n    self.tasks.insert(id, Task { id, label, complete: false });\n    \n    id\n  }\n\n  pub fn remove(&mut self, id: TaskId) { self.tasks.remove(&id); }\n\n  pub fn get_task(&self, id: TaskId) -> Option<&Task> { self.tasks.get(&id) }\n\n  pub fn get_task_mut(&mut self, id: TaskId) -> Option<&mut Task> { self.tasks.get_mut(&id) }\n\n  pub fn all_tasks(&self) -> impl Iterator<Item = TaskId> + \'_ { self.tasks.keys().copied() }\n}\n\nimpl Task {\n  pub fn id(&self) -> TaskId { self.id }\n}\n\nimpl Todos {\n  pub fn load() -> Self {\n    std::fs::read(Self::store_path())\n      .map(|v| serde_json::from_slice(v.as_slice()).unwrap())\n      .unwrap_or_else(|_| Todos {\n        tasks: BTreeMap::new(),\n        next_id: TaskId(0),\n      })\n  }\n\n  pub fn save(&self) -> Result<(), io::Error> {\n    let file = File::create(Self::store_path())?;\n    let mut writer = BufWriter::new(file);\n    serde_json::to_writer(&mut writer, self)?;\n    writer.flush()?;\n    Ok(())\n  }\n\n  fn store_path() -> std::path::PathBuf { std::env::temp_dir().join("ribir_todos.json") }\n}\n\nimpl TaskId {\n  pub fn next(&self) -> Self { Self(self.0 + 1) }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Todos"})," core is mainly composed of three types: ",(0,i.jsx)(t.code,{children:"Todos"}),", ",(0,i.jsx)(t.code,{children:"Task"}),", and ",(0,i.jsx)(t.code,{children:"TaskId"}),". ",(0,i.jsx)(t.code,{children:"Todos"})," is a collection containing all tasks, ",(0,i.jsx)(t.code,{children:"Task"})," is a struct for a task, and ",(0,i.jsx)(t.code,{children:"TaskId"})," is a unique identifier for a task. ",(0,i.jsx)(t.code,{children:"Todos"})," provides methods for adding, deleting, modifying, and querying tasks, as well as the ability to save to a file. Usually, you also need to write comprehensive unit tests to ensure the correctness of your code."]}),"\n",(0,i.jsx)(t.p,{children:"This part of the work is no different from how you usually write Rust code without a GUI. You can organize your code according to your own habits, as long as you can provide a complete API in the end.  In the design philosophy of Ribir applications, this part of the work is very important, but it is not the focus of this tutorial, so we won't go into detail here."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Tips"}),"\n",(0,i.jsx)(t.p,{children:"Based on such a structure, after completing this part of the work, you can easily turn your core part into a library, and use it to create a CLI application to provide your users with a better development experience and more usage scenarios."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now your application has a complete logic, but no UI yet. Next, let's use Ribir to build a UI for it."}),"\n",(0,i.jsx)(t.h2,{id:"describing-the-ui",children:"Describing the UI"}),"\n",(0,i.jsx)(t.p,{children:"Before we start developing the UI, let's divide the UI into several main parts according to the prototype diagram, so that we can communicate better in the following text:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"todos-prototype",src:n(7716).Z+"",width:"1377",height:"1713"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Title area, showing the name of the application"}),"\n",(0,i.jsx)(t.li,{children:"Input area, enter the task content, press Enter to add the task"}),"\n",(0,i.jsx)(t.li,{children:"Task Tabs, divided into three tabs: All, Active and Completed, which display the corresponding task list respectively"}),"\n",(0,i.jsx)(t.li,{children:"Task, the display of a single task, providing editing, marking completion and deletion functions."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"build-the-overall-structure-with-ribir",children:"Build the overall structure with Ribir"}),"\n",(0,i.jsxs)(t.p,{children:["We have defined the ",(0,i.jsx)(t.code,{children:"Todos"})," type as the root data structure in ",(0,i.jsx)(t.a,{href:"#develop-the-core",children:"Develop the core"}),", and now we can directly describe the entire UI from it through ",(0,i.jsx)(t.code,{children:"Compose"}),". Before that, you need to import ",(0,i.jsx)(t.code,{children:"todos.rs"})," and ",(0,i.jsx)(t.code,{children:"ui.rs"})," in ",(0,i.jsx)(t.code,{children:"main.rs"}),", and add a ",(0,i.jsx)(t.code,{children:"main"})," function as the application entry:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'//  main.rs\n\nmod todos;\nmod ui;\n\nuse ribir::prelude::*;\nuse std::time::Duration;\n\nfn main() {\n  let todos = State::value(todos::Todos::load());\n\n  // save changes to disk every 5 seconds .\n  let save_todos = todos.clone_reader();\n  \n  watch!($todos;)\n    .debounce(Duration::from_secs(5), AppCtx::scheduler())\n    .subscribe(move |_| {\n      if let Err(err) = save_todos.read().save() {\n        log::error!("Save tasks failed: {}", err);\n      }\n    });\n\n  App::run(fn_widget! { todos })\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"main.rs"}),", a ",(0,i.jsx)(t.code,{children:"State"})," is first created to save the ",(0,i.jsx)(t.code,{children:"Todos"})," data, and it is passed to the ",(0,i.jsx)(t.code,{children:"App::run"})," method as the root widget, so that the application can run."]}),"\n",(0,i.jsxs)(t.p,{children:["Simultaneously, any modifications to ",(0,i.jsx)(t.code,{children:"todos"})," are monitored, and it to the disk every 5 seconds. Currently, your application lacks interaction and cannot modify ",(0,i.jsx)(t.code,{children:"todos"}),", so the auto-save logic won't be triggered. However, as soon as you add interaction, it'll work."]}),"\n",(0,i.jsxs)(t.p,{children:["Have you noticed the ",(0,i.jsx)(t.code,{children:";"})," in ",(0,i.jsx)(t.code,{children:"watch!($todo;)"}),"? This is intentional, because we don't want to receive the result of ",(0,i.jsx)(t.code,{children:"todos"}),", but just want to know that it has modified. This is because we will read its latest value in the subscription function to save it."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, add the following code to ",(0,i.jsx)(t.code,{children:"ui.rs"})," to describe ",(0,i.jsx)(t.code,{children:"Todos"})," as a widget:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'// ui.rs\nuse ribir::prelude::*;\n\nimpl Compose for Todos {\n  fn compose(this: impl StateWriter<Value = Self>) -> impl WidgetBuilder {\n    fn_widget! {\n      @Column {\n        align_items: Align::Center,\n        item_gap: 12.,\n        @H1 { text: "Todo" }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When you run the application with ",(0,i.jsx)(t.code,{children:"cargo run"}),', you\'ll see just a "Todo" title in the window. In the code, we use ',(0,i.jsx)(t.code,{children:"Column"})," as the main widget for ",(0,i.jsx)(t.code,{children:"Todo"}),". This type of widget lines up its child widgets in a vertical column. We've set align_items to Align::Center, this will make the child widgets line up in the center. Set item_gap to ",(0,i.jsx)(t.code,{children:"12."})," leaves a space of 12 pixels between each widget."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, we'll add an empty task tabs to the ",(0,i.jsx)(t.code,{children:"Column"})," to set up our entire structure."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'@Tabs {\n  @Tab {\n    @TabItem { @{ Label::new("ALL") } }\n    @TabPane {\n      @{ fn_widget!{ @Text { text: "Coming Soon!" } }}\n    }\n  }\n  @Tab {\n    @TabItem { @{ Label::new("ACTIVE") } }\n    @TabPane {\n      @{ fn_widget!{ @Text { text: "Coming Soon!" } } }\n    }\n  }\n  @Tab {\n    @TabItem { @{ Label::new("DONE") } }\n    @TabPane {\n      @{ fn_widget!{ @Text { text: "Coming Soon!" } }}\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Tabs"})," is also provided by the Ribir widgets library. It's a ",(0,i.jsx)(t.code,{children:"ComposeChild"})," widget, and its children must be of the ",(0,i.jsx)(t.code,{children:"Tab"})," type. Since we're not ready to show content in the ",(0,i.jsx)(t.code,{children:"Tab"})," yet, we're using a ",(0,i.jsx)(t.code,{children:"Text"}),' widget with "Coming soon!" as a placeholder. However, in ',(0,i.jsx)(t.code,{children:"TabPane"}),", we didn't use the ",(0,i.jsx)(t.code,{children:"Text"})," widget directly. Instead, we used a function widget as a child. This is because ",(0,i.jsx)(t.code,{children:"Tabs"})," requires the content of ",(0,i.jsx)(t.code,{children:"TabPane"})," to be a ",(0,i.jsx)(t.code,{children:"GenWidget"}),", as it only wants to build the content for the active ",(0,i.jsx)(t.code,{children:"Tab"}),", not all ",(0,i.jsx)(t.code,{children:"Tabs"}),". A function widget that supports multiple calls can be converted into a ",(0,i.jsx)(t.code,{children:"GenWidget"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"add-the-ability-to-enter-tasks",children:"Add the ability to enter tasks"}),"\n",(0,i.jsxs)(t.p,{children:["Now, let's add the ability to enter data: We'll add an ",(0,i.jsx)(t.code,{children:"Input"})," to the ",(0,i.jsx)(t.code,{children:"Column"}),", and when the Enter key is pressed, the content of the ",(0,i.jsx)(t.code,{children:"Input"})," will be added to ",(0,i.jsx)(t.code,{children:"Todos"})," as a task. But wait, how can we access the ",(0,i.jsx)(t.code,{children:"Input"})," itself within an event callback in ",(0,i.jsx)(t.code,{children:"Input"}),"?"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"@Input {\n  on_key_down: move |e| {\n    if e.key_code() == &PhysicalKey::Code(KeyCode::Enter) {\n      // How to get the `Input` itself here?\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Fortunately, Ribir interacts seamlessly with Rust. Do you remember how we discussed declaring children through variables in the ",(0,i.jsx)(t.a,{href:"/docs/get_started/quick_start#composing-widgets",children:"Composing Widgets"})," section?"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'@ {\n  let input = @Input {};\n  @$input {\n    on_key_down: move |e| {\n    if e.key_code() == &PhysicalKey::Code(KeyCode::Enter)\n      && !$input.text().is_empty() {\n        $this.write().new_task($input.text().to_string());\n        $input.write().set_text("");\n      }\n    },\n    @{ Placeholder::new("What do you want to do ?") }\n  }\n}\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now, add the above code before the ",(0,i.jsx)(t.code,{children:"Tabs"})," in the ",(0,i.jsx)(t.code,{children:"Column"}),". You can now use this input box to add new tasks."]}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-task-list",children:"Adding a Task List"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, there's no content in the ",(0,i.jsx)(t.code,{children:"Tab"}),". Let's add some now."]}),"\n",(0,i.jsxs)(t.p,{children:["The three tabs have different content, but they all have the same structure. So, you can abstract them into one widget. Since there's no corresponding data structure, you can use a function widget to implement it. Let's call this function ",(0,i.jsx)(t.code,{children:"task_list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The second widget you can abstract is ",(0,i.jsx)(t.code,{children:"Task"}),". It has its own data structure, but we don't plan to describe it as a widget using ",(0,i.jsx)(t.code,{children:"Compose"}),". This is because we want to implement the delete function for ",(0,i.jsx)(t.code,{children:"Task"})," in this widget, and ",(0,i.jsx)(t.code,{children:"Task"})," alone can't do this. So, abstract another function widget to easily get the context. Let's call this function ",(0,i.jsx)(t.code,{children:"task_item"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's look at the implementation of ",(0,i.jsx)(t.code,{children:"task_list"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"// ui.rs\n\n...\n\nfn task_lists(this: &impl StateWriter<Value = Todos>, filter: fn(&Task) -> bool) -> GenWidget {\n  let this = this.clone_writer();\n  fn_widget! {\n    @VScrollBar {\n      @Lists {\n        @ { pipe!($this;).map(move |_| {\n          // Here, we intentionally write a line of code that won't be executed, to tell Ribir that the current closure needs to capture `this`'s Writer, not its Reader\n          let _hint_capture_writer = || $this.write();\n          \n          let mut widgets = vec![];\n          for id in $this.all_tasks() {\n            if $this.get_task(id).map_or(false, filter) {\n              let task = this.split_writer(\n                move |todos| todos.get_task(id).unwrap(),\n                move |todos| todos.get_task_mut(id).unwrap(),\n              );\n              widgets.push(task_item(task));\n            }\n          }\n          widgets\n        }) }\n      }\n    }\n  }\n  .into()\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This function widget uses ",(0,i.jsx)(t.code,{children:"Lists"})," to display the entire list. It listens to changes in ",(0,i.jsx)(t.code,{children:"this"})," through ",(0,i.jsx)(t.code,{children:"pipe!($this;).map(move |_| { ... })"})," to ensure that the task list content changes as ",(0,i.jsx)(t.code,{children:"this"})," changes. Finally, it uses a ",(0,i.jsx)(t.code,{children:"VScrollBar"})," to provide scrolling capability."]}),"\n",(0,i.jsx)(t.p,{children:"Did you notice the line about state splitting?"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"let task = this.split_writer(\n  move |todos| todos.get_task(id).unwrap(),\n  move |todos| todos.get_task_mut(id).unwrap(),\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["It splits a Writer of Task from ",(0,i.jsx)(t.code,{children:"this"})," and passes it to the ",(0,i.jsx)(t.code,{children:"task_item"})," function widget. This way, the ",(0,i.jsx)(t.code,{children:"Task"})," data can be directly modified in the ",(0,i.jsx)(t.code,{children:"task_item"})," widget without affecting the entire UI of ",(0,i.jsx)(t.code,{children:"Todos"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"task_lists"}),", there's a tricky part that you've probably noticed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"let _hint_capture_writer = || $this.write();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Why do we need this line of code? When Ribir parses a move closure, it checks whether ",(0,i.jsx)(t.code,{children:"$this"})," is used within the closure. It then automatically captures the reader or writer of ",(0,i.jsx)(t.code,{children:"this"})," for you, so you don't have to manually clone the reader or writer. If the move closure only uses a read reference (",(0,i.jsx)(t.code,{children:"$this"}),"), it captures the Reader. If it uses a write reference (",(0,i.jsx)(t.code,{children:"$this.write()"})," or ",(0,i.jsx)(t.code,{children:"$this.silent()"}),"), it captures the Writer. In the above closure, ",(0,i.jsx)(t.code,{children:"$this"}),"'s write reference isn't used at all, but we need to split a child ",(0,i.jsx)(t.code,{children:"Writer"})," from ",(0,i.jsx)(t.code,{children:"this"})," \u2014 and only a Writer can split a child ",(0,i.jsx)(t.code,{children:"Writer"}),". So, we intentionally write this line to force Ribir to capture ",(0,i.jsx)(t.code,{children:"this"}),"'s ",(0,i.jsx)(t.code,{children:"Writer"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, let's look at the implementation of ",(0,i.jsx)(t.code,{children:"task_item"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"// ui.rs\n\n...\n\nfn task_item<S>(task: S) -> impl WidgetBuilder\nwhere\n  S: StateWriter<Value = Task> + 'static,\n  S::OriginWriter: StateWriter<Value = Todos>,\n{\n  let todos = task.origin_writer().clone_writer();\n\n  fn_widget! {\n    let id = $task.id();\n    let checkbox = @Checkbox { checked: pipe!($task.complete) };\n    watch!($checkbox.checked)\n      .distinct_until_changed()\n      .subscribe(move |v| $task.write().complete = v);\n\n    @ListItem {\n      @{ HeadlineText(Label::new($task.label.clone())) }\n      @Leading {\n        @{ CustomEdgeWidget(checkbox.widget_build(ctx!())) }\n      }\n      @Trailing {\n        cursor: CursorIcon::Pointer,\n        on_tap: move |_| $todos.write().remove(id),\n        @{ svgs::CLOSE }\n      }\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In this function widget, the interesting part is that ",(0,i.jsx)(t.code,{children:"Todos"})," is not passed as a parameter. Instead, it's stipulated that ",(0,i.jsx)(t.code,{children:"Task"})," must be split from ",(0,i.jsx)(t.code,{children:"Todos"}),". This way, you can get the ",(0,i.jsx)(t.code,{children:"Writer"})," of ",(0,i.jsx)(t.code,{children:"Todos"})," in reverse, which allows you to implement the delete function."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, use ",(0,i.jsx)(t.code,{children:"Checkbox"})," to show whether the task is complete, monitor its changes, and synchronize the changes back to ",(0,i.jsx)(t.code,{children:"Task"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, use ",(0,i.jsx)(t.code,{children:"ListItem"})," to show a complete task, composing ",(0,i.jsx)(t.code,{children:"Checkbox"}),", delete button and task content together. ",(0,i.jsx)(t.code,{children:"ListItem"})," is also a widget provided by the Ribir widgets library, and specifies its own child type. Here, ",(0,i.jsx)(t.code,{children:"HeadlineText"})," is used to show the title, ",(0,i.jsx)(t.code,{children:"Leading"})," represents the header content, and ",(0,i.jsx)(t.code,{children:"Trailing"})," represents the tail content."]}),"\n",(0,i.jsxs)(t.p,{children:["Now, in the ",(0,i.jsx)(t.code,{children:"compose"})," of ",(0,i.jsx)(t.code,{children:"Todos"}),", find ",(0,i.jsx)(t.code,{children:"TabPane"}),' and replace the original "coming soon!" with ',(0,i.jsx)(t.code,{children:"task_lists"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'// ui.rs\n\n...\n\n@Tabs {\n  @Tab {\n    @TabItem { @{ Label::new("ALL") } }\n    // new\n    @TabPane { @{ task_lists(&this, |_| true) } }\n  }\n  @Tab {\n    @TabItem { @{ Label::new("ACTIVE") } }\n    // new\n    @TabPane { @{ task_lists(&this, |t| !t.complete )} }\n  }\n  @Tab {\n    @TabItem { @{ Label::new("DONE") } }\n    // new\n    @TabPane { @{ task_lists(&this, |t| t.complete )} }\n  }\n}\n\n...\n'})}),"\n",(0,i.jsx)(t.h3,{id:"adding-the-ability-to-edit-task",children:"Adding the ability to edit task"}),"\n",(0,i.jsx)(t.p,{children:"Your Todos application is almost complete, but there's one final step: adding the ability to edit the content of a task by double-clicking it."}),"\n",(0,i.jsxs)(t.p,{children:["We'll use a double-click to mark a task as being in edit mode. When a task is not in edit mode, we'll display ",(0,i.jsx)(t.code,{children:"task_item"}),", otherwise, we'll display an ",(0,i.jsx)(t.code,{children:"Input"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's go back to ",(0,i.jsx)(t.code,{children:"task_lists"})," and make the following changes:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"\nfn_widget! {\n    // new: Add a new state to record the ID of the task being edited\n    let editing = Stateful::new(None);\n\n    @VScrollBar {\n      @Lists {\n        @ { pipe!($this;).map(move |_| {\n          let _hint_capture_this = || $this.write();\n          let mut widgets = vec![];\n\n          for id in $this.all_tasks() {\n            if $this.get_task(id).map_or(false, cond) {\n              let task = this.split_writer(\n                move |todos| todos.get_task(id).unwrap(),\n                move |todos| todos.get_task_mut(id).unwrap(),\n              );\n              // new: If the task is in edit mode, display an input box. Otherwise, display the task item.\n              let item = pipe!(*$editing == Some($task.id()))\n                .value_chain(|s| s.distinct_until_changed().box_it())\n                .map(move |b|{\n                  if b {\n                    let input = @Input { auto_focus: true };\n                    $input.write().set_text(&$task.label);\n                    @$input {\n                      on_key_down: move |e| {\n                        let key = e.key_code();\n                        if key == &PhysicalKey::Code(KeyCode::Escape) {\n                          *$editing.write() = None;\n                        } else if e.key_code() == &PhysicalKey::Code(KeyCode::Enter) {\n                          let label = $input.text().to_string();\n                          if !label.is_empty() {\n                            $task.write().label = label;\n                            *$editing.write() = None;\n                          }\n                        }\n                      }\n                    }.widget_build(ctx!())\n                  } else {\n                    let item = task_item(task.clone_writer());\n                    @$item {\n                      on_double_tap: move |_| *$editing.write() = Some(id)\n                    }.widget_build(ctx!())\n                  }\n                });\n              widgets.push(item);\n            }\n          }\n          widgets\n        }) }\n      }\n    }\n  }\n  .into()\n"})}),"\n",(0,i.jsx)(t.p,{children:"At this point, your Todos application is complete. You can run the application , then add, delete, and mark tasks, double-click to edit, and even if you close the application and open it again, your task list will still be there because your data is automatically saved to the disk."}),"\n",(0,i.jsx)(t.p,{children:"Through this tutorial, you should have noticed some features of Ribir. Ribir doesn't emphasize UI state management, but instead operates directly on data through APIs, with the UI automatically responding to data changes. The state is just a wrapper that makes data observable. This design allows you to focus on the design of data structures, algorithms, and APIs, while the UI can directly use APIs to display and manipulate data. By eliminating the middle layer, it also eliminates the complexity brought by these middle layers."}),"\n",(0,i.jsx)(t.h2,{id:"improving-styles-and-animations",children:"Improving Styles and Animations"}),"\n",(0,i.jsxs)(t.p,{children:["In the above tutorial, you've completed a full Todos application. However, its style and interactions might not be as attractive and modern as you'd like. If you want to further improve your application, you can continue your journey with the Todos application in the ",(0,i.jsx)(t.a,{href:"/docs/practice_todos_app/improving_styles_and_animations",children:"Improving Styles and Animations"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"complete-code",children:"Complete Code"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'// main.rs\nmod todos;\nmod ui;\nuse ribir::prelude::*;\nuse std::time::Duration;\n\nfn main() {\n  let todos = State::value(todos::Todos::load());\n\n  // save changes to disk every 5 seconds .\n  let save_todos = todos.clone_reader();\n  \n  watch!($todos;)\n    .debounce(Duration::from_secs(5), AppCtx::scheduler())\n    .subscribe(move |_| {\n      if let Err(err) = save_todos.read().save() {\n        log::error!("Save tasks failed: {}", err);\n      }\n    });\n\n  App::run(fn_widget! { todos })\n}\n\n// todos.rs\nuse serde::{Deserialize, Serialize};\nuse std::{\n  collections::BTreeMap,\n  fs::File,\n  io::{self, BufWriter, Write},\n};\n\n#[derive(Debug, Serialize, Deserialize)]\npub struct Todos {\n  tasks: BTreeMap<TaskId, Task>,\n  next_id: TaskId,\n}\n\n#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]\npub struct Task {\n  id: TaskId,\n  pub complete: bool,\n  pub label: String,\n}\n\n#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]\npub struct TaskId(usize);\n\nimpl Todos {\n  pub fn new_task(&mut self, label: String) -> TaskId {\n    let id = self.next_id;\n    self.next_id = self.next_id.next();\n\n    self.tasks.insert(id, Task { id, label, complete: false });\n    id\n  }\n\n  pub fn remove(&mut self, id: TaskId) { self.tasks.remove(&id); }\n\n  pub fn get_task(&self, id: TaskId) -> Option<&Task> { self.tasks.get(&id) }\n\n  pub fn get_task_mut(&mut self, id: TaskId) -> Option<&mut Task> { self.tasks.get_mut(&id) }\n\n  pub fn all_tasks(&self) -> impl Iterator<Item = TaskId> + \'_ { self.tasks.keys().copied() }\n}\n\nimpl Task {\n  pub fn id(&self) -> TaskId { self.id }\n}\n\nimpl Todos {\n  pub fn load() -> Self {\n    std::fs::read(Self::store_path())\n      .map(|v| serde_json::from_slice(v.as_slice()).unwrap())\n      .unwrap_or_else(|_| Todos {\n        tasks: BTreeMap::new(),\n        next_id: TaskId(0),\n      })\n  }\n\n  pub fn save(&self) -> Result<(), io::Error> {\n    let file = File::create(Self::store_path())?;\n    let mut writer = BufWriter::new(file);\n    serde_json::to_writer(&mut writer, self)?;\n    writer.flush()?;\n    Ok(())\n  }\n\n  fn store_path() -> std::path::PathBuf { std::env::temp_dir().join("ribir_todos.json") }\n}\n\nimpl TaskId {\n  pub fn next(&self) -> Self { Self(self.0 + 1) }\n}\n\n\n// ui.rs\n\nuse crate::todos::{Task, Todos};\nuse ribir::prelude::{svgs, *};\nuse std::time::Duration;\n\nimpl Compose for Todos {\n  fn compose(this: impl StateWriter<Value = Self>) -> impl WidgetBuilder {\n    fn_widget! {\n      @Column {\n        align_items: Align::Center,\n        item_gap: 12.,\n        @H1 { text: "Todo" }\n        @ {\n          let input = @Input {};\n          @$input {\n            on_key_down: move |e| {\n            if e.key_code() == &PhysicalKey::Code(KeyCode::Enter)\n              && !$input.text().is_empty() {\n                $this.write().new_task($input.text().to_string());\n                $input.write().set_text("");\n              }\n            },\n            @{ Placeholder::new("What do you want to do ?") }\n          }\n        }\n        @Tabs {\n          @Tab {\n            @TabItem { @{ Label::new("ALL") } }\n            @TabPane { @{ task_lists(&this, |_| true) } }\n          }\n          @Tab {\n            @TabItem { @{ Label::new("ACTIVE") } }\n            @TabPane { @{ task_lists(&this, |t| !t.complete )} }\n          }\n          @Tab {\n            @TabItem { @{ Label::new("DONE") } }\n            @TabPane { @{ task_lists(&this, |t| t.complete )} }\n          }\n        }\n      }\n    }\n  }\n}\n\nfn task_lists(this: &impl StateWriter<Value = Todos>, cond: fn(&Task) -> bool) -> GenWidget {\n  let this = this.clone_writer();\n  fn_widget! {\n    let editing = Stateful::new(None);\n\n    @VScrollBar {\n      @Lists {\n        @ { pipe!($this;).map(move |_| {\n          let _hint_capture_this = || $this.write();\n          let mut widgets = vec![];\n\n          for id in $this.all_tasks() {\n            if $this.get_task(id).map_or(false, cond) {\n              let task = this.split_writer(\n                move |todos| todos.get_task(id).unwrap(),\n                move |todos| todos.get_task_mut(id).unwrap(),\n              );\n              let item = pipe!(*$editing == Some($task.id()))\n                .value_chain(|s| s.distinct_until_changed().box_it())\n                .map(move |b|{\n                  if b {\n                    let input = @Input { auto_focus: true };\n                    $input.write().set_text(&$task.label);\n                    @$input {\n                      on_key_down: move |e| {\n                        let key = e.key_code();\n                        if key == &PhysicalKey::Code(KeyCode::Escape) {\n                          *$editing.write() = None;\n                        } else if e.key_code() == &PhysicalKey::Code(KeyCode::Enter) {\n                          let label = $input.text().to_string();\n                          if !label.is_empty() {\n                            $task.write().label = label;\n                            *$editing.write() = None;\n                          }\n                        }\n                      }\n                    }.widget_build(ctx!())\n                  } else {\n                    let item = task_item(task.clone_writer());\n                    @$item {\n                      on_double_tap: move |_| *$editing.write() = Some(id)\n                    }.widget_build(ctx!())\n                  }\n                });\n              widgets.push(item);\n            }\n          }\n          widgets\n        }) }\n      }\n    }\n  }\n  .into()\n}\n\nfn task_item<S>(task: S) -> impl WidgetBuilder\nwhere\n  S: StateWriter<Value = Task> + \'static,\n  S::OriginWriter: StateWriter<Value = Todos>,\n{\n  let todos = task.origin_writer().clone_writer();\n\n  fn_widget! {\n    let id = $task.id();\n    let item = @ListItem {};\n    let checkbox = @Checkbox { checked: pipe!($task.complete) };\n    watch!($checkbox.checked)\n      .distinct_until_changed()\n      .subscribe(move |v| $task.write().complete = v);\n\n    @$item {\n      @{ HeadlineText(Label::new($task.label.clone())) }\n      @Leading {\n        @{ CustomEdgeWidget(checkbox.widget_build(ctx!())) }\n      }\n      @Trailing {\n        cursor: CursorIcon::Pointer,\n        on_tap: move |_| $todos.write().remove(id),\n        @{ svgs::CLOSE }\n      }\n    }\n  }\n}\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5138:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/todos-demo-4e85183aefdfff31b6cb89525c4216c3.gif"},7716:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/todos-widgets-0adfa3f25343fc1f0f2410f3d9d4447d.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);