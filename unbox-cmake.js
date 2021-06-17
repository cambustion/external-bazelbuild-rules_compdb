#!/usr/bin/env node
/* global require process */

const fs = require('fs');
const path = require('path');
const os = require("os");

// command = "/usr/bin/g++-11 -DBOOST_ALL_NO_LIB -DBOOST_DATE_TIME_DYN_LINK -DBOOST_FILESYSTEM_DYN_LINK -DBOOST_RANDOM_DYN_LINK -DBOOST_REGEX_DYN_LINK -DBOOST_SPIRIT_THREADSAFE -DBOOST_SYSTEM_DYN_LINK -DBOOST_THREAD_DYN_LINK -DGLEW_STATIC -DHAVE_GRAPHICSMAGICK -DHAVE_PDF_IMAGE -DWT_BUILDING -DWT_FONTSUPPORT_SIMPLE -DWT_WITH_OLD_INTERNALPATH_API -D_REENTRANT -Dwt_EXPORTS -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.build_tmpdir -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/web -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.build_tmpdir/src -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/Wt/Dbo/backend/amalgamation -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/3rdparty/glew-1.10.0/include -I/usr/include/GraphicsMagick -isystem /home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.ext_build_deps/boost/include/boost-1_76 -pipe -feliminate-unused-debug-types -Wno-unused-parameter -std=c++20 -O2 -g -DNDEBUG -fPIC -o CMakeFiles/wt.dir/Wt/PopupWindow.C.o -c /home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/Wt/PopupWindow.C"

// command =  "/usr/bin/g++-11 -DBOOST_ALL_NO_LIB -DBOOST_DATE_TIME_DYN_LINK -DBOOST_FILESYSTEM_DYN_LINK -DBOOST_RANDOM_DYN_LINK -DBOOST_REGEX_DYN_LINK -DBOOST_SPIRIT_THREADSAFE -DBOOST_SYSTEM_DYN_LINK -DBOOST_THREAD_DYN_LINK -DGLEW_STATIC -DHAVE_GRAPHICSMAGICK -DHAVE_PDF_IMAGE -DWT_BUILDING -DWT_FONTSUPPORT_SIMPLE -DWT_WITH_OLD_INTERNALPATH_API -D_REENTRANT -Dwt_EXPORTS -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.build_tmpdir -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/web -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.build_tmpdir/src -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/Wt/Dbo/backend/amalgamation -I/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/3rdparty/glew-1.10.0/include -I/usr/include/GraphicsMagick -isystem /home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.ext_build_deps/boost/include/boost-1_76 -pipe -feliminate-unused-debug-types -Wno-unused-parameter -std=c++20 -O2 -g -DNDEBUG -fPIC -o CMakeFiles/wt.dir/Wt/ServerSideFontMetrics.C.o -c /home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/external/wt/src/src/Wt/ServerSideFontMetrics.C"

// command = "   	/usr/bin/gcc     -U_FORTIFY_SOURCE -fstack-protector -Wall -Wunused-but-set-parameter -Wno-free-nonheap-object -fno-omit-frame-pointer -std=c++0x -f\"no -canonical-system-headers\" -Wno-builtin-macro-redefined -D__DATE__=\"redacted\" -D__TIMESTAMP__=\"redacted\" -D__TIME__=\"redacted\" -I \"bazel- out/k8-fastbuild/bin/server/_virtual_includes/server\" -I'bazel-out/ k8-fastbuild/bin/external/wt/_virtual_includes/wt' -I bazel\\ -out/k8-fastbuild/bin/external/rh_cpp_utils/reflection/_virtual_includes/reflection -I bazel-out/k8-fastbuild/bin/external/rh_cpp_utils/debug/_virtual_includes/debug -iquote . -iquote bazel-out/k8-fastbuild/genfiles -iquote bazel-out/k8-fastbuild/bin -iquote external/wt -iquote bazel-out/k8-fastbuild/genfiles/external/wt -iquote bazel-out/k8-fastbuild/bin/external/wt -iquote external/system -iquote bazel-out/k8-fastbuild/genfiles/external/system -iquote bazel-out/k8-fastbuild/bin/external/system -iquote external/rh_cpp_utils -iquote bazel-out/k8-fastbuild/genfiles/external/rh_cpp_utils -iquote bazel-out/k8-fastbuild/bin/external/rh_cpp_utils -x c++ -c server/wtx/SimpleComboBox.cpp  /usr/bin/gcc ";

// Old Bazel
// command = "/usr/bin/gcc -U_FORTIFY_SOURCE -fstack-protector -Wall -Wunused-but-set-parameter -Wno-free-nonheap-object -fno-omit-frame-pointer -std=c++0x -fno-canonical-system-headers -Wno-builtin-macro-redefined -D__DATE__=\"redacted\" -D__TIMESTAMP__=\"redacted\" -D__TIME__=\"redacted\" -I bazel-out/k8-fastbuild/bin/server/_virtual_includes/server -I bazel-out/k8-fastbuild/bin/external/wt/_virtual_includes/wt -I bazel-out/k8-fastbuild/bin/external/rh_cpp_utils/reflection/_virtual_includes/reflection -I bazel-out/k8-fastbuild/bin/external/rh_cpp_utils/debug/_virtual_includes/debug -iquote . -iquote bazel-out/k8-fastbuild/genfiles -iquote bazel-out/k8-fastbuild/bin -iquote external/wt -iquote bazel-out/k8-fastbuild/genfiles/external/wt -iquote bazel-out/k8-fastbuild/bin/external/wt -iquote external/system -iquote bazel-out/k8-fastbuild/genfiles/external/system -iquote bazel-out/k8-fastbuild/bin/external/system -iquote external/rh_cpp_utils -iquote bazel-out/k8-fastbuild/genfiles/external/rh_cpp_utils -iquote bazel-out/k8-fastbuild/bin/external/rh_cpp_utils -x c++ -c server/wtx/SimpleComboBox.cpp";

// New Bazel
// command = "/usr/bin/gcc -U_FORTIFY_SOURCE -fstack-protector -Wall -Wunused-but-set-parameter -Wno-free-nonheap-object -fno-omit-frame-pointer -std=c++0x -fno-canonical-system-headers -Wno-builtin-macro-redefined -D__DATE__=\"redacted\" -D__TIMESTAMP__=\"redacted\" -D__TIME__=\"redacted\" -I bazel-out/k8-fastbuild/bin/server/_virtual_includes/server -I bazel-out/k8-fastbuild/bin/external/wt/_virtual_includes/wt -I bazel-out/k8-fastbuild/bin/external/rh_cpp_utils/reflection/_virtual_includes/reflection -I bazel-out/k8-fastbuild/bin/external/rh_cpp_utils/debug/_virtual_includes/debug -iquote . -iquote bazel-out/k8-fastbuild/bin -iquote external/wt -iquote bazel-out/k8-fastbuild/bin/external/wt -iquote external/system -iquote bazel-out/k8-fastbuild/bin/external/system -iquote external/rh_cpp_utils -iquote bazel-out/k8-fastbuild/bin/external/rh_cpp_utils -x c++ -c server/wtx/SimpleComboBox.cpp"

// bazelWorkspacePath = "/home/rh/box/cambustion/s600-solution-n";
// file = "server/wtx/SimpleComboBox.cpp";
// bazelExecroot = path.join(bazelWorkspacePath, 'bazel-' + path.basename(bazelWorkspacePath));

const bazelExtBuildDepReplacements = {
  'boost/include/boost-1_76': 'external/boost/src',
};

const bazelSandboxReplacements = {
  'external/wt/src/src/wt': 'external/wt/src/src/Wt',
  'external/wt/src/examples/onethread/lib':
    'external/wt/src/examples/onethread',
};

const bazelSandboxRegex = /^\/.+?\/sandbox\/.+?\/execroot\/.+?\/(.+)$/;

const bazelBuildTmpdirRegex =
  /^(\/.+?\/sandbox\/.+?\/execroot\/.+\/)([^\/]+)(\/.+\.build_tmpdir\/?.*)$/;

const bazelExtBuildDepsRegex =
  /^\/.+?\/sandbox\/.+?\/execroot\/.+?\/.+?\/.+\.ext_build_deps\/(.+)$/;

const unbox = ({ command, file }, bazelWorkspacePath) => {
  // file = "/home/rh/.cache/bazel/_bazel_rh/7f2ec843b2bb9df2c5800cb918fd66bf/sandbox/linux-sandbox/2/execroot/s600-solution-2/bazel-out/k8-fastbuild/bin/external/wt/wt.build_tmpdir/src/Plain_html.C"
  const fileOrig = file;

  {
    let pathMatch = file.match(bazelBuildTmpdirRegex);
    if(pathMatch) {
      const depName = pathMatch[2];
      const copyPathStr = path.join(depName, `copy_${depName}`, depName);
      file = path.join(pathMatch[1], copyPathStr, pathMatch[3]);
    }

    pathMatch = file.match(bazelSandboxRegex);
    if(pathMatch) {
      let pathRelStr = pathMatch[1];
      if(pathRelStr in bazelSandboxReplacements) {
        pathRelStr = bazelExtBuildDepReplacements[pathRelStr];
      }
      file = path.join(bazelWorkspacePath, pathRelStr);
    }
  }

  if(!fs.existsSync(file)) {
    throw new Error(
      [`file = ${file} does not exist.`,
       `fileOrig = ${fileOrig}`,
      ].join(' '),
    );
  }

  command = command.trim(command);

  // Regexp selects quoted strings handling excaped characters
  let commandParts = command.split(/(['"])((?:[^\1\\]|\\.)*?\1)/g);

  // Re-split commandParts into white space and not-white space
  // respecting quatations and excaped characters
  commandParts = commandParts.reduce((result, value) => {
    let last;
    if(result.length > 0) { last = result[result.length - 1]; }
    else last = '';
    if(last === '"' || last === "'") {
      result[result.length - 1] += value;
    }
    else if(value === '"' || value === "'") {
      result.push(value);
    }
    else {
      // Regexp selects non-white-space strings respecting escaped
      // white-space symbols
      result = result.concat(value.split(/([^\s](?:[^\s\\]|\\.)*)/g));
    }
    return result;
  }, []);

  // Re-join parts into LCI command options and parameters
  commandParts = commandParts.reduce((result, value) => {
    if(value === '') { return result; }
    let last;
    if(result.length > 0) { last = result[result.length - 1]; }
    else { last = ''; }
    if(last.match(/^(?:-I|-isystem|-iquote|-c|-x)\s*$/) ||
       last.match(/=\s*$/) ||
       value.match(/^\s+$/)
    ) {
      result[result.length - 1] += value;
    }
    else { result.push(value); }
    return result;
  }, []);

  commandParts = commandParts.reduce((result, value) => {
    let m = value.match(/^(-I|-isystem|-iquote|-c)\s*(.*?)(\s*)$/);
    if(m) {
      let pathStrOrig = m[2];
      if(pathStrOrig === '.') {
        result.push(value);
        return result;
      }
      // Strip quatations if any
      pathStrOrig = pathStrOrig.replace(/^["']?(.+?)["']?$/, '$1');
      pathStrOrig = path.normalize(pathStrOrig);
      let pathStrProc = pathStrOrig;

      let pathMatch = pathStrProc.match(bazelExtBuildDepsRegex);
      if(pathMatch) {
        const depStr = pathMatch[1];
        if(depStr in bazelExtBuildDepReplacements) {
          pathStrProc = bazelExtBuildDepReplacements[depStr];
          pathStrProc = path.join(bazelWorkspacePath, pathStrProc);
        };
      }

      pathMatch = pathStrProc.match(bazelBuildTmpdirRegex);
      if(pathMatch) {
        const depName = pathMatch[2];
        const copyPathStr = path.join(depName, `copy_${depName}`, depName);
        pathStrProc = path.join(pathMatch[1], copyPathStr, pathMatch[3]);
        pathStrProc = path.join(bazelWorkspacePath, pathStrProc);
      }

      let unboxedAbsPathStr = pathStrProc;
      pathMatch = pathStrProc.match(bazelSandboxRegex);
      if(pathMatch) {
        let unboxedRelPathStr = pathMatch[1];
        if(unboxedRelPathStr in bazelSandboxReplacements) {
          unboxedRelPathStr = bazelSandboxReplacements[unboxedRelPathStr];
        };
        unboxedAbsPathStr =
          path.join(bazelWorkspacePath, unboxedRelPathStr);
      }

      if(fs.existsSync(unboxedAbsPathStr)) {
        pathStrProc = unboxedAbsPathStr;
      }
      else {
        console.log(
          [`unboxedAbsPathStr = ${unboxedAbsPathStr} does not exist.\n`,
           `pathStrOrig = ${pathStrOrig}\n`,
           `value = ${value}`,
          ].join(''),
        );
        process.exit(1);
      }

      if(pathStrProc.match(/\s/)) { pathStrProc = `"${pathStrProc}"`; };
      value = `${m[1]} ${pathStrProc}${m[3]}`;
      result.push(value);
    }
    else { result.push(value); }
    return result;
  }, []);

  command = commandParts.join('');
  command = command.replace(/ +-fno-canonical-system-headers/, '');

  return { command, file, directory: bazelWorkspacePath };
};

const args = process.argv.slice(2);

if(!(args.length == 2 || args.length == 3)) {
  console.log(
    ['Usage: unbox path/to/compile_commands.json',
     'bazel/workspace/path [include/prefix/path]',
    ].join(' ')
  );
  process.exit();
}

const compileCommandsPath = args[0].replace("~", os.homedir);

if(!fs.existsSync(compileCommandsPath)) {
  throw compileCommandsPath +  ' file does not exist';
}

const bazelWorkspacePath = args[1].replace("~", os.homedir);

if(!fs.existsSync(bazelWorkspacePath)) {
  throw bazelWorkspacePath +  ' bazelWorkspacePath does not exist';
}

const includePrefixPath =
  args[3] === undefined ? null : path.join(args[3], path.sep);

let commandsString = fs.readFileSync(compileCommandsPath, 'utf8');
const commandsIn = JSON.parse(commandsString);
const commandsOut = [];

if(includePrefixPath === null) {
  for(let command of commandsIn) {
    commandsOut.push(unbox(command, bazelWorkspacePath));
  }
}
else {
  for(let command of commandsIn) {
    if(command.file.startsWith(includePrefixPath)) {
      commandsOut.push(unbox(command, bazelWorkspacePath));
    }
  }
}


fs.writeFileSync(compileCommandsPath, JSON.stringify(commandsOut, null, 2));