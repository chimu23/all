## git 常用

1. ### 本地特殊配置

   - 本地忽略指定文件 （push 时候如果文件发生改动，还是需要重新 merge 该文件）

     ```
     git update-index --assume-unchanged a.txt
     ```

   - 取消忽略文件
     ```
     git update-index --no-assume-unchanged a.txt
     ```

   ###### 注：`.gitignore`只能忽略那些原来没有被`track`的文件，如果某些文件已经被纳入了版本管理中，则修改`.gitignore`是无效的。

2. ### push

   - 本地推送到远端对应分支

     ```
     git push origin HEAD
     ```

   - 本地推送到指定分支

     ```
     git push -u origin master
     ```

   - 删除远端分支

     ```
     git push origin :master   ===   git push origin --delete master
     ```

3. ### commit

   - 撤销最后一次 commit，并保留工作区内容 （撤销两次 `HEAD~2` ）

     ```
     git reset --soft HEAD^

     --mixed   默认参数，撤销git add，撤销commit，保留改动
     --soft    不删除工作空间改动代码，撤销commit，不撤销git add .
     --hard    删除工作空间改动代码，撤销commit，撤销git add .  === 恢复到了上一次的commit状态
     ```

   - 修改 commit 内容

     ```
      git commit --amend
     ```

4. ### revert

   - 反做某个版本，即撤销某个版本的改动

      ```
       git revert -n 8b89621019c9adc6fc4d242cd41daeb13aeb98
      ```

5. ### checkout 切换分支

   - 新建 dev 分支并切换到该分支

     ```
      git checkout -b dev
     ```

   - 新建 dev 分支关联到远端 develop 分支并切换到该分支

     ```
      git checkout -b dev origin/develop
     ```
6. ### reset

   - 撤销改动 --soft 保留工作区内容  --hard 不保留工作区内容 HEAD^上一个版本 HEAD~2上两个版本

      ```
       git reset --soft HEAD^
      ```

7. ### alias

   - 设置别名

      ```
       git config --global alias.co checkout
      ```
      
   - 取消别名

      ```
       git config --global --unset alias.br
      ```
  
   - 查看配置

      ```
       git config --list
      ```
  
